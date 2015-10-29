using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Depedencies_Resolving
{
    /// <summary>
    /// Holds the name of the project along with all the packages, which must be installed
    /// </summary>
    public class Dependency : IDependency
    {
        private string projectName;
        private object[] dependencies;

        public Dependency(string projectName, object[] dependencies)
        {
            this.projectName = projectName;
            this.dependencies = dependencies;
        }

        public Dependency(string projectName)
        {
            this.projectName = projectName;
            this.dependencies = new object[1];
        }

        public Dependency()
        {
            this.projectName = "No name";
            this.dependencies = new object[1];
        }

        public string ProjectName
        {
            get
            {
                return this.projectName;
            }
            set
            {
                this.projectName = value;
            }
        }

        public object[] Dependencies
        {
            get
            {
                return this.dependencies;
            }
            set
            {
                this.dependencies = value;
            }
        }
    }
}
