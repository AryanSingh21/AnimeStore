using API.Data;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Migrations.Operations.Builders;
using Microsoft.Extensions.Configuration;

var builder = WebApplication.CreateBuilder(args);
// var host = builder.Build();
// var scope = host.Services.CreateScope();
// var context = scope.ServiceProvider.GetRequiredService<StoreContext>();
// var logger = scope.ServiceProvider.GetRequiredService<ILogger<Program>>();
 
// try
// {
//     context.Database.Migrate();
//     DbIntializer.Initialize(context);
// }
// catch (System.Exception ex)
// {
    
//     logger.LogError(ex , "Problem Migrating data");
// }


// Add services to the container.
builder.Services.AddDbContext<StoreContext>(opt => 
{
    
    opt.UseSqlite(builder.Configuration.GetConnectionString("DefaultConnection"));
});
builder.Services.AddControllers();
// Learn more about configuring Swagger/OpenAPI at https://aka.ms/aspnetcore/swashbuckle
builder.Services.AddEndpointsApiExplorer();
builder.Services.AddSwaggerGen();
builder.Services.AddCors();

var app = builder.Build();
using var scope = app.Services.CreateScope();
var context = scope.ServiceProvider.GetRequiredService<StoreContext>();
var logger = scope.ServiceProvider.GetRequiredService<ILogger<Program>>();

try
{
    context.Database.Migrate();
    DbIntializer.Initialize(context);
}
catch (System.Exception ex)
{
    
    logger.LogError(ex , "Problem Migrating data");
}



// Configure the HTTP request pipeline.
if (app.Environment.IsDevelopment())
{
    app.UseSwagger();
    app.UseSwaggerUI();
}

app.UseHttpsRedirection();

app.UseCors(opt =>
{
    opt.AllowAnyHeader().AllowAnyMethod().WithOrigins("http://localhost:3000");
});

app.UseAuthorization();

app.MapControllers();

app.Run();
