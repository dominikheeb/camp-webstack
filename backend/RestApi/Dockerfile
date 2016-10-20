FROM microsoft/dotnet:nanoserver-core
RUN mkdir C:\app
WORKDIR C:\app
ENTRYPOINT ["dotnet", "RestApi.dll"]
ENV ASPNETCORE_URLS http://+:80
EXPOSE 80
ADD . /app