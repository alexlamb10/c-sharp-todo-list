FROM mcr.microsoft.com/dotnet/sdk:7.0 AS build-env
WORKDIR /app

COPY TodoApi.csproj ./TodoApi.csproj 

RUN dotnet restore

COPY . .
RUN dotnet publish -c Release -o out

FROM mcr.microsoft.com/dotnet/sdk:7.0 
WORKDIR /app
COPY --from=build-env /app/out .
ENV ASPNETCORE_URLS=http://localhost:5137

EXPOSE 80/tcp
EXPOSE 442/tcp
EXPOSE 5137/tcp

ENTRYPOINT [ "dotnet", "TodoApi.dll" ]