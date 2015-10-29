using System;
using System.Collections.Generic;
using System.IO;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using System.Web.Script.Serialization;
using System.Runtime.Serialization;
using Microsoft.VisualStudio.TestTools.UnitTesting;
using Depedencies_Resolving;

namespace Dependency_Resolving_Unit_Tests
{
    [TestClass]
    public class DependencyResolvingUnitTests
    {
        [TestMethod]
        public void TestIfCorrectPackagesAreInstalled()
        {
            bool arePackagesCorrect = true;

            Packages allPackages = new Packages();
            allPackages.AllPackages = new Dictionary<string, string[]>();
            allPackages.AllPackages.Add("backbone", new string[] { "jQuery", "underscore" });
            allPackages.AllPackages.Add("jQuery" , new string[] { "queryJ" });
            allPackages.AllPackages.Add("underscore", new string[] { "lodash" });
            allPackages.AllPackages.Add("queryJ", new string[] { });
            allPackages.AllPackages.Add("lodash", new string[] { });

            Dependency dependency = new Dependency("Test0000", new object[] {"backbone"});

            IOperator mockOperator = new PackagesOperatorMock();
            mockOperator.InstallRequiredPackages(allPackages, dependency, "lodash");

            string[] packagesResult = new string[] { "backbone", "jQuery", "queryJ", "underscore", "lodash", };
            int position = 0;

            foreach (KeyValuePair<string, bool> package in mockOperator.ShowInstalledPackages())
            {
                if(package.Key != packagesResult[position])
                {
                    arePackagesCorrect = false;
                    break;
                }

                position++;
            }

            Assert.AreEqual(true, arePackagesCorrect);

        }
    }
}
