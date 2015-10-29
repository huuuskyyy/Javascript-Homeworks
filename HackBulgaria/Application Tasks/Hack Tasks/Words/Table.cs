using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Words
{
    public class Table
    {
        private List<string> table;

        public Table(List<string> table)
        {
            this.table = table;
        }

        public Table()
        {
            this.table = new List<string>();
        }

        public List<string> GetTable
        {
            get
            {
                return this.table;
            }
            set
            {
                this.table = value;
            }
        }

        public int RowsCount
        {
            get
            {
                return this.table.Count;
            }
            
        }

        public int ColsCount
        {
            get
            {
                return this.table[0].Length;
            }

        }
    }
}
