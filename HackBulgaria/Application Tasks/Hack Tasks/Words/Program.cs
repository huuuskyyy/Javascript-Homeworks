using System;
using System.Collections.Generic;
using System.Linq;
using System.Text.RegularExpressions;
using System.Text;

namespace Words
{
    public class Program
    {
        public static void Main(string[] args)
        {
            //creates new table with data
            Table table = new Table(new List<string>() { "ivan", "evnh", "inav", "mvvn", "qrit" });

            string wordToSearch = "ivan";
            string wordToSearchReversed = WordOperations.ReverseWord(wordToSearch);
            string[] wordsToSearch = { wordToSearch, wordToSearchReversed };

            int wordOccurences = TableOperations.CountWordInTable(table, wordsToSearch);

            Console.WriteLine(wordOccurences);
        }

    }
}
