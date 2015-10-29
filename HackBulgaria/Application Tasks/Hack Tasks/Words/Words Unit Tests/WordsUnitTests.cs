using System;
using Microsoft.VisualStudio.TestTools.UnitTesting;
using Words;
using System.Collections.Generic;

namespace Words_Unit_Tests
{
    [TestClass]
    public class WordsUnitTests
    {
        [TestMethod]
        public void CheckIfEmptyTableShowZeroOccurences()
        {
            Table table = new Table(new List<string>());

            string wordToSearch = "ivan";
            string wordToSearchReversed = WordOperations.ReverseWord(wordToSearch);

            string[] wordsToSearch = { wordToSearch, wordToSearchReversed };

            int wordOccurences = TableOperations.CountWordInTable(table, wordsToSearch);

            Assert.AreEqual(0, wordOccurences);
        }

        [TestMethod]
        public void CheckIfEmptyWordToSearchShowsZeroOccurences()
        {
            Table table = new Table(new List<string>() { "ivan", "evnn", "nnav", "mvvn", "irit" });

            string wordToSearch = " ";
            string wordToSearchReversed = WordOperations.ReverseWord(wordToSearch);

            string[] wordsToSearch = { wordToSearch, wordToSearchReversed };

            int wordOccurences = TableOperations.CountWordInTable(table, wordsToSearch);

            Assert.AreEqual(0, wordOccurences);
        }

        [TestMethod]
        public void CheckIfWordIsSearchCorrectlyWholeTable()
        {
            Table table = new Table(new List<string>() { "ivan", "evnn", "nnav", "mvvn", "irit" });

            string wordToSearch = "ivan";
            string wordToSearchReversed = WordOperations.ReverseWord(wordToSearch);

            string[] wordsToSearch = { wordToSearch, wordToSearchReversed };

            int wordOccurences = TableOperations.CountWordInTable(table, wordsToSearch);

            Assert.AreEqual(4, wordOccurences);
        }

        [TestMethod]
        public void CheckIfWordIsSearchCorrectlyRowsOnly()
        {
            Table table = new Table(new List<string>() { "ivan", "aaaa", "ivan", "aaaa", "aaaa" });

            string wordToSearch = "ivan";
            string wordToSearchReversed = WordOperations.ReverseWord(wordToSearch);

            string[] wordsToSearch = { wordToSearch, wordToSearchReversed };

            int wordOccurences = TableOperations.CountWordInTable(table, wordsToSearch);

            Assert.AreEqual(2, wordOccurences);
        }

        [TestMethod]
        public void CheckIfWordIsSearchCorrectlyRowsBackwardsOnly()
        {
            Table table = new Table(new List<string>() { "navi", "aaaa", "navi", "aaaa", "aaaa" });

            string wordToSearch = "ivan";
            string wordToSearchReversed = WordOperations.ReverseWord(wordToSearch);

            string[] wordsToSearch = { wordToSearch, wordToSearchReversed };

            int wordOccurences = TableOperations.CountWordInTable(table, wordsToSearch);

            Assert.AreEqual(2, wordOccurences);
        }

        [TestMethod]
        public void CheckIfWordIsSearchCorrectlyColumnsOnly()
        {
            Table table = new Table(new List<string>() { "iaai", "vaav", "aaaa", "naan", "aaaa" });

            string wordToSearch = "ivan";
            string wordToSearchReversed = WordOperations.ReverseWord(wordToSearch);

            string[] wordsToSearch = { wordToSearch, wordToSearchReversed };

            int wordOccurences = TableOperations.CountWordInTable(table, wordsToSearch);

            Assert.AreEqual(2, wordOccurences);
        }

        [TestMethod]
        public void CheckIfWordIsSearchCorrectlyColumnsBackwardsOnly()
        {
            Table table = new Table(new List<string>() { "naan", "aaaa", "vaav", "iaai", "aaaa" });

            string wordToSearch = "ivan";
            string wordToSearchReversed = WordOperations.ReverseWord(wordToSearch);

            string[] wordsToSearch = { wordToSearch, wordToSearchReversed };

            int wordOccurences = TableOperations.CountWordInTable(table, wordsToSearch);

            Assert.AreEqual(2, wordOccurences);
        }

        [TestMethod]
        public void CheckIfWordIsSearchCorrectlyLeftToRightDiagonalOnly()
        {
            Table table = new Table(new List<string>() { "iaaa", "ivaa", "avaa", "aaan", "aaan" });

            string wordToSearch = "ivan";
            string wordToSearchReversed = WordOperations.ReverseWord(wordToSearch);

            string[] wordsToSearch = { wordToSearch, wordToSearchReversed };

            int wordOccurences = TableOperations.CountWordInTable(table, wordsToSearch);

            Assert.AreEqual(2, wordOccurences);
        }

        [TestMethod]
        public void CheckIfWordIsSearchCorrectlyLeftToRightDiagonalBackwardsOnly()
        {
            Table table = new Table(new List<string>() { "naaa", "naaa", "aava", "aavi", "aaai" });

            string wordToSearch = "ivan";
            string wordToSearchReversed = WordOperations.ReverseWord(wordToSearch);

            string[] wordsToSearch = { wordToSearch, wordToSearchReversed };

            int wordOccurences = TableOperations.CountWordInTable(table, wordsToSearch);

            Assert.AreEqual(2, wordOccurences);
        }

        [TestMethod]
        public void CheckIfWordIsSearchCorrectlyRightToLeftDiagonalOnly()
        {
            Table table = new Table(new List<string>() { "aaai", "aavi", "aava", "naaa", "naaa" });

            string wordToSearch = "ivan";
            string wordToSearchReversed = WordOperations.ReverseWord(wordToSearch);

            string[] wordsToSearch = { wordToSearch, wordToSearchReversed };

            int wordOccurences = TableOperations.CountWordInTable(table, wordsToSearch);

            Assert.AreEqual(2, wordOccurences);
        }

        [TestMethod]
        public void CheckIfWordIsSearchCorrectlyRightToLeftDiagonalBackwardsOnly()
        {
            Table table = new Table(new List<string>() { "aaan", "aaan", "avaa", "ivaa", "iaaa" });

            string wordToSearch = "ivan";
            string wordToSearchReversed = WordOperations.ReverseWord(wordToSearch);

            string[] wordsToSearch = { wordToSearch, wordToSearchReversed };

            int wordOccurences = TableOperations.CountWordInTable(table, wordsToSearch);

            Assert.AreEqual(2, wordOccurences);
        }

        [TestMethod]
        public void CheckIfTableValueIsSetCorrectly()
        {
            Table table = new Table();
            var newTableData = new List<string>() { "ivan", "evnn", "nnav", "mvvn", "irit" };
            table.GetTable = newTableData;
            bool areEqual = true;
            int position = 0;

            foreach(var tableRow in table.GetTable)
            {
                if(!tableRow.Equals(newTableData[position]))
                {
                    areEqual = false;
                    break;
                }
                position++;
            }

            Assert.AreEqual(true, areEqual);
        }

        [TestMethod]
        public void CheckIfWordIsReversedCorrectly()
        {
            string wordToSearch = "ivan";
            string wordToSearchReversed = WordOperations.ReverseWord(wordToSearch);

            Assert.AreEqual("navi", wordToSearchReversed);
        }

        [TestMethod]
        public void CheckIfEmptyWordIsReversedCorrectly()
        {
            string wordToSearch = "   ";
            string wordToSearchReversed = WordOperations.ReverseWord(wordToSearch);

            Assert.AreEqual("   ", wordToSearchReversed);
        }

    }
}
