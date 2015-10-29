using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Depedencies_Resolving
{
    /// <summary>
    /// Display messages on the console during the packages installation process
    /// </summary>
    public static class InstallNotifier
    {
        /// <summary>
        /// Displays the current installed package
        /// </summary>
        /// <param name="name">String name of the package</param>
        internal static void DisplayCurrentInstall(string name)
        {
            Console.WriteLine("Installing "+name+".");
        }

        /// <summary>
        /// Displays the required packages for the project
        /// </summary>
        /// <param name="packages">Packages for the project</param>
        /// <param name="package">String package name</param>
        /// <param name="installedPackages">Dictionary already installed packages</param>
        internal static void DisplayDependencyPackages(Packages packages, string package, Dictionary<string, bool> installedPackages)
        {
            string output = DisplayDependencies(packages, package, installedPackages);

            if(!String.IsNullOrEmpty(output))
            {
                Console.WriteLine(output);
            }
        }

        /// <summary>
        /// Displayes end message of the installation process
        /// </summary>
        internal static void DisplayEndMessage()
        {
            Console.WriteLine("All done");
        }

        /// <summary>
        /// Displays error message, if there's no project
        /// </summary>
        internal static void DisplayNoProjectErrorMessage()
        {
            Console.WriteLine("Error! No project found");
        }

        /// <summary>
        /// Builds string message of the required dependency packages for each package
        /// </summary>
        /// <param name="packages">Packages to be installed</param>
        /// <param name="package">String current package</param>
        /// <param name="installedPackages">Dictionary already installed packages</param>
        /// <returns>String message</returns>
        private static string DisplayDependencies(Packages packages, string package, Dictionary<string, bool> installedPackages)
        {
            if (packages.AllPackages.Count == 0)
            {
                return String.Empty;
            }

            List<string> alreadyInstalled = new List<string>();
            List<string> dependeciesRequired = new List<string>();

            foreach(var currentDependencyPackage in packages.AllPackages[package])
            {
                if(installedPackages.ContainsKey(currentDependencyPackage))
                {
                    alreadyInstalled.Add(currentDependencyPackage);
                }
                dependeciesRequired.Add(currentDependencyPackage);
                
            }

            if(dependeciesRequired.Count == 0)
            {
                return String.Empty;
            }

            StringBuilder builder = new StringBuilder();
            builder.Append("In order to install "+package+", we need ");
            builder.Append(IterrateOverDependenciesToBeDisplayed(dependeciesRequired));

            if(alreadyInstalled.Count > 0)
            {
                builder.Append(". ");
                builder.Append(IterrateOverDependenciesToBeDisplayed(alreadyInstalled));

                if(alreadyInstalled.Count > 1)
                {
                    builder.Append(" are ");
                }
                else
                {
                    builder.Append(" is ");
                }

                builder.Append(" already installed");
            }

            return builder.ToString();
            
        }

        /// <summary>
        /// Builds string of the dependencies to be displayed to the user
        /// </summary>
        /// <param name="listPackages">List of dependencies that will be displayed to the user</param>
        /// <returns>String message</returns>
        private static string IterrateOverDependenciesToBeDisplayed(List<string> listPackages)
        {
            StringBuilder builder = new StringBuilder();

            for (int i = 0; i < listPackages.Count; i++)
            {
                if (i == (listPackages.Count - 1))
                {
                    builder.Append(listPackages[i]);
                }
                else if (i == (listPackages.Count - 2))
                {
                    builder.Append(listPackages[i] + " and ");
                }
                else
                {
                    builder.Append(listPackages[i] + ", ");
                }
            }

            return builder.ToString();
        }

        
    }
}
