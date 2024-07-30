import { bfs } from "../lib/algorithm/pathfinding/bfs";
import { dfs } from "../lib/algorithm/pathfinding/dfs";
import { dijkstra } from "../lib/algorithm/pathfinding/dijikstras";
import { AlgorithmType, GridType, TileType } from "./types";

export const runPathfindingAlgorithm = ({
  algorithm,
  grid,
  startTile,
  endTile,
}: {
  algorithm: AlgorithmType;
  grid: GridType;
  startTile: TileType;
  endTile: TileType;
}) => {
  switch (algorithm) {
    case "BFS":
      return bfs(grid, startTile, endTile);
    case "DFS":
      return dfs(grid, startTile, endTile);
    case "DIJKSTRA":
      return dijkstra(grid, startTile, endTile);
    default:
      return bfs(grid, startTile, endTile);
  }
};
