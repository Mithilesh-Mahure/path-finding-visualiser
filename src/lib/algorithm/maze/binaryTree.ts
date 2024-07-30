import { MAX_COLS, MAX_ROWS } from "../../../utils/constants";
import { createWall } from "../../../utils/createWall";
import { GridType, SpeedType, TileType } from "../../../utils/types";
import { getRandInt, isEqual, sleep } from "../../../utils/helpers";
import { destroyWall } from "../../../utils/destroyWall";

export async function binaryTree(
  grid: GridType,
  startTile: TileType,
  endTile: TileType,
  setIsDisabled: (isDisabled: boolean) => void,
  speed: SpeedType
) {
  createWall(startTile, endTile, speed);
  await sleep(MAX_ROWS * MAX_COLS);
  for (const row of grid) {
    for (const tile of row) {
      if (tile.row % 2 === 0 || tile.col % 2 === 0) {
        if (!isEqual(tile, startTile) && !isEqual(tile, endTile)) {
          tile.isWall = true;
        }
      }
    }
  }

  for (let row = 1; row < MAX_ROWS - 1; row += 2) {
    for (let col = 1; col < MAX_COLS - 1; col += 2) {
      if (row === MAX_ROWS - 2 && col === MAX_COLS - 2) {
        continue;
      } else if (row === MAX_ROWS - 2) {
        await destroyWall(grid, row, col, 1, speed);
      } else if (col === MAX_COLS - 2) {
        await destroyWall(grid, row, col, 0, speed);
      } else {
        await destroyWall(grid, row, col, getRandInt(0, 2), speed);
      }
    }
  }
  setIsDisabled(false);
}
