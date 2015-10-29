using System;
using System.Collections.Generic;
using System.Linq;
using System.Text.RegularExpressions;

namespace Points
{
    public class Program
    {
        public static void Main(string[] args)
        {
            ///can input directions from the console
            //string directions = Console.ReadLine();
            string directions = ">>><<<~>>>~^^^";
            Point point = new Point(0, 0);
            DirectionPointer pointer = new DirectionPointer(1);

            foreach (var direction in directions)
            {
                DirectionParser.HandleDirection(direction, point, pointer);
            }

            Console.WriteLine(point.ToString());
        }

    }
}
