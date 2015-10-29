using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using Depedencies_Resolving;
using System.IO;

namespace Dependency_Resolving_Unit_Tests
{
    /// <summary>
    /// Mocks PackagesOperator class for unit tests
    /// </summary>
    class PackagesOperatorMock:IOperator
    {
        private Dictionary<string, bool> installedPackages;
        public PackagesOperatorMock()
        {
            installedPackages = new Dictionary<string, bool>();
        }

        public Dictionary<string, bool> ShowInstalledPackages()
        {
                return this.installedPackages;
        }
        public void InstallRequiredPackages(Packages packages, Dependency dependencies, string installedPackagesString)
        {
            installedPackages = this.GetInstalledPackages(installedPackagesString);

            if (!Object.ReferenceEquals(null, dependencies))
            {
                foreach (var dependcyPackage in dependencies.Dependencies)
                {
                    InstallPackage(packages, dependencies, installedPackages, dependcyPackage.ToString());
                }

            }
            else
            {
                throw new ArgumentException("Error! Dependencies object is null");
            }

        }

         private Dictionary<string, bool> GetInstalledPackages(string installedPackagesString)
        {
            string[] installedPackagesArray = installedPackagesString.Split(new char[]{' '},StringSplitOptions.RemoveEmptyEntries);

            Dictionary<string, bool> installedPackages = new Dictionary<string, bool>();

            foreach (var package in installedPackagesArray)
            {
                this.installedPackages.Add(package, true);
            }

            return installedPackages;
        }

         private void InstallPackage(Packages packages, Dependency dependencies, Dictionary<string, bool> installedPackages, string currentPackage)
         {
             if (packages.AllPackages.ContainsKey(currentPackage))
             {
                 if (!installedPackages.ContainsKey(currentPackage))
                 {
                     installedPackages.Add(currentPackage, true);
                 }
                 foreach (var package in packages.AllPackages[currentPackage])
                 {
                     if (!installedPackages.ContainsKey(package))
                     {
                         
                         InstallPackage(packages, dependencies, installedPackages, package);
                         
                     }

                 }
             }
         }
    }
}
