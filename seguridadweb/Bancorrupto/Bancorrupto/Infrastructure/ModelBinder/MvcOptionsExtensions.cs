using Bancorrupto.Infrastructure.ModelBinder;
using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Mvc.ModelBinding.Binders;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Microsoft.Extensions.DependencyInjection
{
    public static class MvcOptionsExtensions
    {
        public static void UseHtmlEncodeModelBinding(this MvcOptions opts)
        {
            var binderToFind = opts.ModelBinderProviders.FirstOrDefault(x => x.GetType() == typeof(SimpleTypeModelBinderProvider));

            if (binderToFind == null) return;

            var index = opts.ModelBinderProviders.IndexOf(binderToFind);
            opts.ModelBinderProviders.Insert(index, new HtmlEncodeModelBinderProvider());
        }
    }
}
