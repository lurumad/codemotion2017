using Microsoft.AspNetCore.Builder;
using Microsoft.Extensions.DependencyInjection;

namespace Heroes.Api
{
    public static class Configuration
    {
        public static IServiceCollection ConfigureServices(IServiceCollection services) =>
            services
                .AddMvcCore()
                .AddJsonFormatters()
                .AddApiExplorer()
                .Services;

        public static IApplicationBuilder Configure(IApplicationBuilder app) =>
            app;
    }
}
