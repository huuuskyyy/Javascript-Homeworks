using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Depedencies_Resolving
{
    /// <summary>
    /// Object with string name of the package
    /// and corresponding string array of depending packages
    /// </summary>
    public class Packages:IPackages
    {
        private Dictionary<string, string[]> allPackages;

        public Packages(Dictionary<string, string[]> allPackages)
        {
            this.allPackages = allPackages;
        }

        public Packages()
        {
            this.allPackages = new Dictionary<string, string[]>();
        }

        public Dictionary<string, string[]> AllPackages
        {
            get
            {
                return this.allPackages;
            }
            set
            {
                this.allPackages = value;
            }

        }

    }
}
