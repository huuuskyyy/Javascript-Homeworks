using System;
using System.Collections.Generic;
using System.IO;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using System.Web.Script.Serialization;
using System.Runtime.Serialization;

namespace Depedencies_Resolving
{
    class Program
    {
        static void Main(string[] args)
        {
            JavaScriptSerializer jsSerializer = new JavaScriptSerializer();
            PackagesOperator packagesOperator = new PackagesOperator();
            
            string pathOfAllPackages = "all_packages.json";
            string pathOfDependencies = "dependencies.json";
            string pathToInstallPackages = @"...\...\Installed modules";

            Packages allPackages = new Packages();

            allPackages.AllPackages = JSONDeserializer.DeserializeJsonAllPackagesFile(pathOfAllPackages, jsSerializer);
            Dependency dependencies = JSONDeserializer.DeserializeJsonDependencies(pathOfDependencies, jsSerializer);

            packagesOperator.InstallRequiredPackages(allPackages, dependencies, pathToInstallPackages);

        }

    }
}
