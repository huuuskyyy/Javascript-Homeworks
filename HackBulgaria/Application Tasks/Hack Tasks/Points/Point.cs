using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Points
{
    /// <summary>
    /// Point object with X and Y int coordinates
    /// </summary>
    public class Point
    {
        private int x;
        private int y;

        public Point (int x, int y)
        {
            this.x = x;
            this.y = y;
        }

        public Point()
        {
            this.x = 0;
            this.y = 0;
        }

        public int X
        {
            get
            {
                return this.x;
            }
            set
            {
                this.x = value;
            }
        }

        public int Y
        {
            get
            {
                return this.y;
            }
            set
            {
                this.y = value;
            }
        }

        public void MoveRight(DirectionPointer directionPointer)
        {
            this.x += directionPointer.ValueOfPointer;
        }

        public void MoveLeft(DirectionPointer directionPointer)
        {
            this.x += (directionPointer.ValueOfPointer * -1);
        }

        public void MoveDown(DirectionPointer directionPointer)
        {
            this.y += directionPointer.ValueOfPointer;
        }

        public void MoveUp(DirectionPointer directionPointer)
        {
            this.y += (directionPointer.ValueOfPointer * -1);
        }

        public override string ToString()
        {
            return "X = " + this.x + "; Y = " + this.y + ";";
        }

        public override bool Equals(Object pointAsObj)
        {
            Point pointToCompare = (Point)pointAsObj;
            return (pointToCompare.x.Equals(this.x) && pointToCompare.y.Equals(this.y));
        }
    }
}
