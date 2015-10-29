using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Points
{
    /// <summary>
    /// Contains methods, which call the respective methods depending on the direction
    /// </summary>
    public static class DirectionParser
    {
        /// <summary>
        /// Calls the respective methods depending on the direction
        /// </summary>
        /// <param name="direction">Char current direction symbol</param>
        /// <param name="point">Current point object to be moved</param>
        /// <param name="pointer">Direction pointer position modifier</param>
        public static void HandleDirection(char direction, Point point, DirectionPointer pointer)
        {
            switch (direction)
            {
                case '>': point.MoveRight(pointer); break;
                case '<': point.MoveLeft(pointer); break;
                case '^': point.MoveUp(pointer); break;
                case 'v': point.MoveDown(pointer); break;
                case '~': pointer.ReverseDirectionPointer(); break;
            }
        }

    }
}
