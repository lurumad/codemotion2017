using Microsoft.AspNetCore.Mvc.ModelBinding;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text.Encodings.Web;
using System.Threading.Tasks;

namespace Bancorrupto.Infrastructure.ModelBinder
{
    public class HtmlEncodeModelBinder : IModelBinder
    {
        private readonly IModelBinder _fallbackBinder;

        public HtmlEncodeModelBinder(IModelBinder fallbackBinder)
        {
            if (fallbackBinder == null)
                throw new ArgumentNullException(nameof(fallbackBinder));

            _fallbackBinder = fallbackBinder;
        }

        public Task BindModelAsync(ModelBindingContext bindingContext)
        {
            if (bindingContext == null)
                throw new ArgumentNullException(nameof(bindingContext));

            var valueProviderResult = bindingContext.ValueProvider.GetValue(bindingContext.ModelName);

            if (valueProviderResult == ValueProviderResult.None)
            {
                return Task.CompletedTask;
            }

            var valueAsString = valueProviderResult.FirstValue;

            if (string.IsNullOrEmpty(valueAsString))
            {
                return _fallbackBinder.BindModelAsync(bindingContext);
            }

            var result = HtmlEncoder.Default.Encode(valueAsString);
            bindingContext.Result = ModelBindingResult.Success(result);

            return Task.CompletedTask;
        }
    }
}
