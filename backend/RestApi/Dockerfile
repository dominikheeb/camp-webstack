FROM microsoft/aspnet

RUN mkdir C:\site

RUN powershell -NoProfile -Command \
    Import-module IISAdministration; \
    New-IISSite -Name "Backend" -PhysicalPath C:\site -BindingInformation "*:80:"

EXPOSE 80

ADD . /site