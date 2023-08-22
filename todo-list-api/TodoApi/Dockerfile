FROM mcr.microsoft.com/dotnet/sdk:7.0 AS build-env
WORKDIR /app

COPY TodoApi.csproj ./TodoApi.csproj 

RUN dotnet restore

COPY . ./
RUN dotnet publish -c Release -o out

FROM mcr.microsoft.com/dotnet/sdk:7.0 
WORKDIR /app
COPY --from=build-env /app/out .
EXPOSE 80/tcp
EXPOSE 442/tcp

ENTRYPOINT [ "dotnet", "TodoApi.dll" ]