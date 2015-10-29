using System;
using System.Collections.Generic;
using System.IO;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using System.Web.Script.Serialization;

namespace Depedencies_Resolving
{
    /// <summary>
    /// Deserializes .json files containing all packages dependencies and 
    /// the project required packages
    /// </summary>
    public static class JSONDeserializer
    {
        /// <summary>
        /// Deserializes all packages and their dependencies
        /// </summary>
        /// <param name="path">String path of the all packages .json file</param>
        /// <param name="jsSerializer">Javascript deserializer instanace used for the deserialization</param>
        /// <returns>Dictionary of all packages and their dependencies</returns>
        public static Dictionary<string, string[]> DeserializeJsonAllPackagesFile(string path, JavaScriptSerializer jsSerializer)
        {
            Dictionary<string, string[]> allPackagesSerialized;

            using (var reader = new StreamReader(path))
            {
                var allPackagesFile = reader.ReadToEnd();
                var obj = jsSerializer.DeserializeObject(allPackagesFile);
                allPackagesSerialized = jsSerializer.ConvertToType<Dictionary<string, string[]>>(obj);
            }

            if(allPackagesSerialized == null)
            {
                allPackagesSerialized = new Dictionary<string, string[]>();
            }

            return allPackagesSerialized;
        }

        // <summary>
        /// Deserializes the project's dependencies
        /// </summary>
        /// <param name="path">String path of the dependencies .json file</param>
        /// <param name="jsSerializer">Javascript deserializer instanace used for the deserialization</param>
        /// <returns>Dependacy of all project dependencies</returns>
        public static Dependency DeserializeJsonDependencies(string path, JavaScriptSerializer jsSerializer)
        {
            Dependency dependencies = new Dependency();

            using (var reader = new StreamReader(path))
            {
                var dependenciesPackagesFile = reader.ReadToEnd();
                dependencies = jsSerializer.Deserialize<Dependency>(dependenciesPackagesFile);
            }

            return dependencies;
        }
    }
}
