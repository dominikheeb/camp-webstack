FROM microsoft/dotnet:nanoserver-core
RUN mkdir /app
COPY . /app
WORKDIR /app
ENTRYPOINT ["dotnet", "RestApi.dll"]
ENV ASPNETCORE_URLS http://+:80
EXPOSE 80