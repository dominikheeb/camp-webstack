FROM microsoft/dotnet:nanoserver-core
WORKDIR /app
ENTRYPOINT ["dotnet", "RestApi.dll"]
ENV ASPNETCORE_URLS http://+:80
EXPOSE 80
COPY . .