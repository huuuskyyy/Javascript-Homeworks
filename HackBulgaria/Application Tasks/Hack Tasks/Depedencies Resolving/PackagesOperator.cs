using System;
using System.Collections.Generic;
using System.IO;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Depedencies_Resolving
{
    /// <summary>
    /// Installs all required packages for the current project
    /// </summary>
    public class PackagesOperator:IOperator
    {
        private Dictionary<string, bool> installedPackages;
        public PackagesOperator()
        {
            installedPackages = new Dictionary<string, bool>();
        }
        public Dictionary<string, bool> ShowInstalledPackages()
        {
            return this.installedPackages;
        }
        /// <summary>
        /// Install all required packages for the projecy
        /// </summary>
        /// <param name="packages">All available packages and their dependencies</param>
        /// <param name="dependencies">Project's dependencies</param>
        /// <param name="path">Path to install the packages</param>
        public void InstallRequiredPackages(Packages packages, Dependency dependencies, string path)
        {
            Dictionary<string, bool> installedPackages = this.GetInstalledPackages(path);

            if (!Object.ReferenceEquals(null, dependencies))
            {
                foreach (var dependcyPackage in dependencies.Dependencies)
                {
                    InstallNotifier.DisplayCurrentInstall(dependcyPackage.ToString());
                    InstallNotifier.DisplayDependencyPackages(packages, dependcyPackage.ToString(), installedPackages);
                    InstallPackage(packages, dependencies, installedPackages, path, dependcyPackage.ToString());
                    Directory.CreateDirectory(path + @"\" + dependcyPackage);
                }

                InstallNotifier.DisplayEndMessage();
            }
            else
            {
                InstallNotifier.DisplayNoProjectErrorMessage();
            }

        }

        /// <summary>
        /// Get allready installed packages in the installation directory
        /// </summary>
        /// <param name="path">Installation directory path</param>
        /// <returns>Dictionary of already installed packages names</returns>
        private Dictionary<string, bool> GetInstalledPackages(string path)
        {
            Dictionary<string, bool> installedPackages = new Dictionary<string, bool>();

            DirectoryInfo di = new DirectoryInfo(path);

            foreach (var directory in di.EnumerateDirectories())
            {
                installedPackages.Add(directory.Name, true);
            }

            return installedPackages;
        }

        /// <summary>
        /// Installs single package
        /// </summary>
        /// <param name="packages">All available packages and their dependencies</param>
        /// <param name="dependencies">Project's dependencies</param>
        /// <param name="installedPackages">Allready installed packages</param>
        /// <param name="path">Directory path to install the packages</param>
        /// <param name="currentPackage">Current packge to be installed</param>
        private void InstallPackage(Packages packages, Dependency dependencies, Dictionary<string, bool> installedPackages, string path, string currentPackage)
        {
            if (packages.AllPackages.ContainsKey(currentPackage))
            {
                foreach (var package in packages.AllPackages[currentPackage])
                {
                    if (!installedPackages.ContainsKey(package))
                    {
                        InstallNotifier.DisplayCurrentInstall(package);
                        InstallNotifier.DisplayDependencyPackages(packages, package, installedPackages);
                        InstallPackage(packages, dependencies, installedPackages, path, package);
                        installedPackages.Add(package, true);
                        Directory.CreateDirectory(path + @"\" + package);
                    }

                }
            }
            
        }

    }
}
