global using Microsoft.EntityFrameworkCore;
global using Statmed.Data;
using Statmed.Repository;

var builder = WebApplication.CreateBuilder(args);

// Permite injetar na database de certos endereços
builder.Services.AddCors( options => {
    options.AddPolicy("AllowLocalHost", policy => {
        // Production
        policy.WithOrigins("http://statmed-001-site1.atempurl.com")
        // Dev
        //policy.WithOrigins("http://localhost:5500","http://127.0.0.1:5500")
        .SetIsOriginAllowed(isOriginAllowed: _=> true)
        .AllowAnyHeader().AllowAnyMethod();
    });
});

// Add services to the container.
string mySqlConnection = builder.Configuration.GetConnectionString("StatmedDb");
builder.Services.AddDbContextPool<StatmedDbContext>(options =>
                options.UseMySql(mySqlConnection,
                      ServerVersion.AutoDetect(mySqlConnection)));
                      
builder.Services.AddControllers();
// Learn more about configuring Swagger/OpenAPI at https://aka.ms/aspnetcore/swashbuckle
builder.Services.AddEndpointsApiExplorer();
builder.Services.AddSwaggerGen();

builder.Services.AddScoped(typeof(EnfermagemRepository));
builder.Services.AddScoped(typeof(MedicoRepository));
builder.Services.AddScoped(typeof(SupervisoraAdmRepository));
builder.Services.AddScoped(typeof(RecepcionistaRepository));

var app = builder.Build();

// Configure the HTTP request pipeline.
if (app.Environment.IsDevelopment())
{
    app.UseSwagger();
    app.UseSwaggerUI();
}

app.UseHttpsRedirection();

app.UseCors("AllowLocalHost");

app.UseAuthorization();

app.MapControllers();

app.Run();