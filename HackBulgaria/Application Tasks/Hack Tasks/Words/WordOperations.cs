using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Words
{
    public static class WordOperations
    {
        /// <summary>
        /// Reverses a string
        /// </summary>
        /// <param name="word">String to be reversed</param>
        /// <returns>Returns string reversed word</returns>
        public static string ReverseWord(string word)
        {
            if(String.IsNullOrEmpty(word) || String.IsNullOrWhiteSpace(word))
            {
                return word;
            }

            char[] array = word.ToCharArray();
            Array.Reverse(array);
            return new String(array);
        }

        /// <summary>
        /// Calculate word occurences in a given string
        /// </summary>
        /// <param name="stringToCheck">String to be searched</param>
        /// <param name="word">String word to search for</param>
        /// <returns>Returns int the number of word occurences</returns>
        public static int CheckWordOccurences(string stringToCheck, string word)
        {
            int occurences = (stringToCheck.Length - stringToCheck.Replace(word, String.Empty).Length) / word.Length;
            return occurences;
        }
    }
}
