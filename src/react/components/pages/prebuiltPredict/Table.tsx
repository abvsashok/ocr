import React from "react";
import parse from 'html-react-parser';
export default function Table({ data }) {
    const { cells: Cells, columns: ColumnCount, rows: RowCount } = data;
    let html = '<table>';
    for (let i = 0; i < RowCount; i++) {
        html += `<tr>`;
        for (let j = 0; j < ColumnCount; j++) {

            let cell = Cells.find((c) => { return c.rowIndex == i && c.columnIndex == j });
            let tdClass = "no-text";
            if (cell && cell.text)
                tdClass = "has-text"

            html += `<td class="${tdClass}">`;

            if (cell) {
                html += `${cell.text}`;
            }

            html += `</td>`;
        }
        html += `</tr>`;
    }
    html = html + `</table>`;
    return (
        <table>
            {
                parse(html)
            }
        </table>
    )
}