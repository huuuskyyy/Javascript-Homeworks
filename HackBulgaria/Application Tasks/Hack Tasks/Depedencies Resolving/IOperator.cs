﻿using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Depedencies_Resolving
{
    public interface IOperator
    {
        Dictionary<string, bool> ShowInstalledPackages();
         void InstallRequiredPackages(Packages packages, Dependency dependencies, string path);
    }
}
