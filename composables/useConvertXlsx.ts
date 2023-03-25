import { Range, utils, writeFile } from "xlsx-js-style";

const getverticalAlignment = (verticalAlign: string) => {
  const verticalAlignMap: { [key: string]: string } = {
    "text-top": "top",
    "top": "top",
    "middle": "center",
    "bottom": "bottom",
    "text-bottom": "bottom",
  } as const;
  return verticalAlignMap[verticalAlign] ?? "top";
};

export const useConvertToXlsx = () => {

  /**
   * 各セルのComputedStyleからXLSXのcellのスタイルを作成する。
   * @param cellStyle
   */
  function addXlsxStyle(cellStyle: CSSStyleDeclaration) {
    const s: any = {};

    // alignment
    s["alignment"] = {
      vertical: getverticalAlignment(cellStyle.verticalAlign), // "top" or "center" or "bottom"
      horizontal: cellStyle.textAlign, // "left" or "center" or "right"
    };

    //  backgroundColor
    if (cellStyle.backgroundColor) {
      console.log("==== style backgroundColor", cellStyle.backgroundColor);
      const rgb = cellStyle.backgroundColor.match(/\d+/ig) ?? [];
      const [r, g, b] = rgb.map((num) => {
        return Number(num).toString(16).padStart(2, "0");
      });
      const color = `${r}${g}${b}`;
      console.log("==== color", color);
      s["fill"] = { fgColor: { rgb: color } };
    }
    //  backgroundColor
    if (cellStyle.width) {
      console.log("==== style width", cellStyle.width);
    }
    // border 
    s["border"] = {
      top: { style: "hair", color: "000000" },
      bottom: { style: "hair", color: "000000" },
      left: { style: "hair", color: "000000" },
      right: { style: "hair", color: "000000" },
    };
    //
    s["font"] = {
      sz: cellStyle.fontSize.replace("px", ""),
    };
    return s;
  }

  /**
   * rowspanまたはcolspanを検知して処理を実行する。
   * @param cell テーブルセルのHTML要素
   * @param r 0開始の行番号
   * @param c 0開始の列番号
   * @param aoa XLSXのセルオブジェクトを格納する表配列
   * @param merges XLSXの結合情報
   */
  function toXlsx_runSpan(cell: HTMLTableCellElement, r: number, c: number, aoa: unknown[][], merges: Range[]) {
    const rowspan = Number(cell.getAttribute("rowspan") ?? 1);
    const colspan = Number(cell.getAttribute("colspan") ?? 1);
    if (rowspan > 1 || colspan > 1) {
      for (let r2 = r; r2 < r + rowspan; r2++) {
        for (let c2 = c; c2 < c + colspan; c2++) {
          if (!aoa[r2]) aoa[r2] = [];
          if (!aoa[r2][c2]) aoa[r2][c2] = "null";
        }
      }

      merges.push({
        s: { r, c },
        e: { r: r + rowspan - 1, c: c + colspan - 1 },
      });
    }
  }

  const convertTableToXlsx = (table: HTMLTableElement) => {
    const opts = { raw: true };
    const workbook = utils.book_new();

    const aoa: unknown[][] = [];
    const merges: Range[] = [];
    const rows = table.querySelectorAll("tr");
    const cols = table.querySelectorAll("colgroup col");
    let r = 0;
    for (const row of rows) {
      if (!aoa[r]) aoa[r] = [];
      const cells = row.querySelectorAll<HTMLTableCellElement>("th,td");
      let c = 0;
      for (const cell of cells) {
        while (aoa[r][c] === "null") {
          c++;
        }
        const cellStyle = window.getComputedStyle(cell);
        // computedStyleからxlsxのセルのスタイルを設定する
        const s = addXlsxStyle(cellStyle);
        aoa[r][c] = { v: cell.innerText, t: "s", s };
        // rowspanまたはcolspanの処理を実行
        toXlsx_runSpan(cell, r, c, aoa, merges);
        c++;
      }
      r++;
    }
    console.log("==== aoa", aoa);
    var worksheet = utils.aoa_to_sheet(aoa);
    worksheet["!merges"] = merges;
    worksheet["!rows"] = Array.from(rows).map((row) => {
      return ({
        hpx: Number(window.getComputedStyle(row).height.replace("px", "")),
      });
    });
    worksheet["!cols"] = Array.from(cols).map((col) => {
      return ({
        wpx: Number(window.getComputedStyle(col).width.replace("px", "")),
      });
    });

    utils.book_append_sheet(workbook, worksheet, "サンプル");


    writeFile(workbook, "demo.xlsx", { compression: false });
  };

  return {
    convertTableToXlsx,
  };
};