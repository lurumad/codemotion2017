using Microsoft.AspNetCore.Builder;
using Microsoft.AspNetCore.Hosting;
using Microsoft.Extensions.DependencyInjection;
using Heroes.Api;
using Swashbuckle.AspNetCore.Swagger;

namespace Heroes.WebHost
{
    public class Startup
    {
        public void ConfigureServices(IServiceCollection services)
        {
            Configuration
                .ConfigureServices(services)
                .AddCors()
                .AddSwaggerGen(options =>
                {
                    options.SwaggerDoc("v1", new Info { Title = "Heroes API", Version = "v1" });
                });
        }

        public void Configure(IApplicationBuilder app, IHostingEnvironment env)
        {
            var defaultFileOptions = new DefaultFilesOptions();
            defaultFileOptions.DefaultFileNames.Clear();
            defaultFileOptions.DefaultFileNames.Add("index.html");

            Configuration
                .Configure(app)
                .UseDeveloperExceptionPage()
                .UseSwagger()
                .UseSwaggerUI(options => 
                {
                    options.SwaggerEndpoint("/swagger/v1/swagger.json", "Swagger");
                })
                .UseCors(options =>
                {
                    options.AllowAnyHeader();
                    options.AllowAnyMethod();
                    options.AllowAnyOrigin();
                })
                .UseDefaultFiles(defaultFileOptions)
                .UseStaticFiles()
                .UseMvcWithDefaultRoute();

        }
    }
}
