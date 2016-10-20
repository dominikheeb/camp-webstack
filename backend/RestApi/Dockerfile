FROM microsoft/dotnet
WORKDIR /app
ENTRYPOINT ["dotnet", "RestApi.dll"]
ENV ASPNETCORE_URLS http://+:80
EXPOSE 80
COPY . .