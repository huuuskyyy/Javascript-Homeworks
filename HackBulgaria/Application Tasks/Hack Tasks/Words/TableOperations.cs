using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Words
{
    public static class TableOperations
    {
        /// <summary>
        /// Count word occurences in table by summing 
        /// the occurences in rows, columns and diagonals
        /// </summary>
        /// <param name="table">Table to be checked</param>
        /// <param name="words">String array of words to search for</param>
        /// <returns>Returns int occurences of all words</returns>
        public static int CountWordInTable(Table table, string[] words)
        {
            int count = 0;

            if(table.RowsCount > 0 && !String.IsNullOrEmpty(words[0]))
            {
                count += SearchWordInRows(table, words);
                count += SearchWordInColumns(table, words);
                count += SearchWordInDiagonals(table, words);
            }
            
            return count;
        }

        /// <summary>
        /// Search words occurences in table rows
        /// </summary>
        /// <param name="table">Table to search in</param>
        /// <param name="words">String array of words to search for</param>
        /// <returns>Returns int occurences of string array of words in the table</returns>
        private static int SearchWordInRows(Table table, string[] words)
        {
            int count = 0;

            foreach (var word in words)
            {
                foreach (var row in table.GetTable)
                {
                    count += WordOperations.CheckWordOccurences(row, word);
                }
            }

            return count;
        }

        /// <summary>
        /// Search words occurences in table columns
        /// </summary>
        /// <param name="table">Table to search in</param>
        /// <param name="words">String array of words to search for</param>
        /// <returns>Returns int occurences of string array of words in the table</returns>
        private static int SearchWordInColumns(Table table, string[] words)
        {
            int currentRow = 0;
            int currentCol = 0;
            int maxRow = table.RowsCount;
            int maxCol = table.ColsCount;
            int rowPositionModifier = 1;
            int colPositionModifier = 0;
            int count = 0;

            for (int i = 0; i < maxCol; i++)
            {
                string stringToSearch = BuildStringToSearchFromTable(table, currentRow, currentCol, maxRow, maxCol, rowPositionModifier, colPositionModifier);

                foreach (var word in words)
                {
                    count += WordOperations.CheckWordOccurences(stringToSearch, word);
                }

                currentCol++;
            }

            return count;
        }

        /// <summary>
        /// Search words occurences in table diagonals
        /// </summary>
        /// <param name="table">Table to search in</param>
        /// <param name="words">String array of words to search for</param>
        /// <returns>Returns int occurences of string array of words in the table</returns>
        private static int SearchWordInDiagonals(Table table, string[] words)
        {
            int count = 0;

            //set initial values for left to right diagonal search
            int leftToRightDiagonalStartCol = 0;
            int leftToRightDiagonalRowsModifier = 1;
            int leftToRightDiagonalColsModifier = 1;
            int leftToRightDiagonalRowReseter = 0;
            int leftToRightDiagonalColReseter = 1;
            int leftToRightDiagonalRowIncreaser = 1;
            int leftToRightDiagonalColIncreaser = 1;

            ////set initial values for right to left diagonal search
            int rightToLeftDiagonalStartCol = table.ColsCount - 1;
            int rightToLeftDiagonalRowsModifier = 1;
            int rightToLeftDiagonalColsModifier = -1;
            int rightToLeftDiagonalRowReseter = 0;
            int rightToLeftDiagonalColReseter = table.ColsCount - 2;
            int rightToLeftDiagonalRowIncreaser = 1;
            int rightToLeftDiagonalColIncreaser = -1;

            count += SearchInDiagonals(table, words, leftToRightDiagonalStartCol, leftToRightDiagonalRowsModifier, leftToRightDiagonalColsModifier, leftToRightDiagonalRowReseter, leftToRightDiagonalColReseter, leftToRightDiagonalRowIncreaser, leftToRightDiagonalColIncreaser);
            count += SearchInDiagonals(table, words, rightToLeftDiagonalStartCol, rightToLeftDiagonalRowsModifier, rightToLeftDiagonalColsModifier, rightToLeftDiagonalRowReseter, rightToLeftDiagonalColReseter, rightToLeftDiagonalRowIncreaser, rightToLeftDiagonalColIncreaser);

            return count;
        }

        /// <summary>
        /// Search in current diagonal by given start position 
        /// and position modifiers in each step
        /// </summary>
        /// <param name="table">Table to search in</param>
        /// <param name="words">String array of words to search for</param>
        /// <param name="currentColValue">Start column value</param>
        /// <param name="modifierRows">Row modifier on each step required only for building string to search</param>
        /// <param name="modifierCols">Column modifier on each step required only for building string to search</param>
        /// <param name="rowReseter">Row reset value after reaching the edge of the table</param>
        /// <param name="colReseter">Column reset value after reaching the edge of the table</param>
        /// <param name="rowIncreaser">Current row position modifier on each step</param>
        /// <param name="colIncreaser">Current column position modifier on each step</param>
        /// <returns>Returns int occurences of string array of words in the table</returns>
        private static int SearchInDiagonals(Table table, string[] words, int currentColValue, int modifierRows, int modifierCols, int rowReseter, int colReseter, int rowIncreaser, int colIncreaser)
        {
            int currentRow = 0;
            int currentCol = currentColValue;
            int maxRow = table.RowsCount;
            int maxCol = table.ColsCount;
            int rowPositionModifier = modifierRows;
            int colPositionModifier = modifierCols;
            int count = 0;
            int maxDiagonal = maxRow > maxCol ? maxCol : maxRow;

            while (maxRow - currentRow >= maxDiagonal)
            {
                string stringToSearch = BuildStringToSearchFromTable(table, currentRow, currentCol, maxRow, maxCol, rowPositionModifier, colPositionModifier);

                foreach (var word in words)
                {
                    count += WordOperations.CheckWordOccurences(stringToSearch, word);

                }

                currentRow += rowIncreaser;
            }

            currentRow = rowReseter;
            currentCol = colReseter;

            while (currentCol >= maxDiagonal)
            {
                string stringToSearch = BuildStringToSearchFromTable(table, currentRow, currentCol, maxRow, maxCol, rowPositionModifier, colPositionModifier);

                foreach (var word in words)
                {
                    count += WordOperations.CheckWordOccurences(stringToSearch, word);

                }

                currentCol-= colIncreaser;
            }

            return count;
        }

        /// <summary>
        /// Builds a string from table cells based on start position and position modifiers 
        /// for each step until give maximum row and column position
        /// </summary>
        /// <param name="table">Table to build string from</param>
        /// <param name="currentRow">Int start row position</param>
        /// <param name="currentCol">Int start column position</param>
        /// <param name="maxRow">Maximum allowed row position</param>
        /// <param name="maxCol">Maximum allowed column position</param>
        /// <param name="rowPositionModifier">Row position modifier on each step</param>
        /// <param name="colPositionModifier">Column position modifier on each step</param>
        /// <returns>Returns the build string from the table</returns>
        private static string BuildStringToSearchFromTable(Table table, int currentRow, int currentCol, int maxRow, int maxCol, int rowPositionModifier, int colPositionModifier)
        {
            StringBuilder stringToSearch = new StringBuilder();

            while (currentRow < maxRow && currentCol < maxCol && currentRow > -1 && currentCol > -1)
            {
                stringToSearch.Append(table.GetTable[currentRow][currentCol]);
                currentRow += rowPositionModifier;
                currentCol += colPositionModifier;
            }

            return stringToSearch.ToString();
        }

    }
}
