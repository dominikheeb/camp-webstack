FROM microsoft/dotnet:1.0.0-preview2-windowsservercore-sd
WORKDIR /app
ENTRYPOINT ["dotnet", "RestApi.dll"]
ENV ASPNETCORE_URLS http://+:80
EXPOSE 80
COPY . .