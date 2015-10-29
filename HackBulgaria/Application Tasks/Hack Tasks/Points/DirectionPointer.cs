using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Points
{
    /// <summary>
    /// Holds the value, which is used to change point(x,y) by each new direction move
    /// </summary>
    public class DirectionPointer
    {
        private int valueOfPointer;

        public DirectionPointer(int valueOfPointer)
        {
            this.valueOfPointer = valueOfPointer;
        }

        public int ValueOfPointer
        {
            get
            {
                return this.valueOfPointer;
            }
            set
            {
                this.valueOfPointer = value;
            }
        }

        /// <summary>
        /// Direction pointer gets opposite direction
        /// </summary>
        public void ReverseDirectionPointer()
        {
            this.valueOfPointer *= -1;
        }
    }
}
