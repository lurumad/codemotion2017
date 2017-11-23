using Microsoft.AspNetCore.Mvc.ModelBinding;
using Microsoft.AspNetCore.Mvc.ModelBinding.Binders;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Bancorrupto.Infrastructure.ModelBinder
{
    public class HtmlEncodeModelBinderProvider : IModelBinderProvider
    {
        public IModelBinder GetBinder(ModelBinderProviderContext context)
        {
            if (context == null)
            {
                throw new ArgumentNullException(nameof(context));
            }

            if (!context.Metadata.IsComplexType && context.Metadata.ModelType == typeof(string)) // only encode string types
            {
                return new HtmlEncodeModelBinder(new SimpleTypeModelBinder(context.Metadata.ModelType));
            }

            return null;
        }
    }
}
