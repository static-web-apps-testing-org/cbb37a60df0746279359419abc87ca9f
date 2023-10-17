// Karma configuration file, see link for more information
// https://karma-runner.github.io/1.0/config/configuration-file.html

module.exports = function (config) {
  config.set({
    basePath: '',
    frameworks: ['jasmine', '@angular-devkit/build-angular'],
    plugins: [
      require('karma-jasmine'),
      require('karma-chrome-launcher'),
      require('karma-jasmine-html-reporter'),
      require('karma-coverage-istanbul-reporter'),
      require('@angular-devkit/build-angular/plugins/karma'),
    ],
    client: {
      clearContext: false, // leave Jasmine Spec Runner output visible in browser
    },
    coverageIstanbulReporter: {
      dir: require('path').join(__dirname, './coverage/angular-basic'),
      reports: ['html', 'lcovonly', 'text-summary'],
      fixWebpackSourcePaths: true,
    },
    reporters: ['progress', 'kjhtml'],
    port: 9876,
    colors: true,
    logLevel: config.LOG_INFO,
    autoWatch: true,
    browsers: ['Chrome'],
    singleRun: false,
    restartOnFileChange: true,
  });
};

// SIG // Begin signature block
// SIG // MIIregYJKoZIhvcNAQcCoIIrazCCK2cCAQExDzANBglg
// SIG // hkgBZQMEAgEFADB3BgorBgEEAYI3AgEEoGkwZzAyBgor
// SIG // BgEEAYI3AgEeMCQCAQEEEBDgyQbOONQRoqMAEEvTUJAC
// SIG // AQACAQACAQACAQACAQAwMTANBglghkgBZQMEAgEFAAQg
// SIG // LxKMXLwES1CpOV4zCtA6BZ+y8Mvj2mvUKgVoWJEzCG2g
// SIG // ghFuMIIIfjCCB2agAwIBAgITNgAAAchkggAwtCOCeAAC
// SIG // AAAByDANBgkqhkiG9w0BAQsFADBBMRMwEQYKCZImiZPy
// SIG // LGQBGRYDR0JMMRMwEQYKCZImiZPyLGQBGRYDQU1FMRUw
// SIG // EwYDVQQDEwxBTUUgQ1MgQ0EgMDEwHhcNMjMwMzIwMjAw
// SIG // MDMxWhcNMjQwMzE5MjAwMDMxWjAkMSIwIAYDVQQDExlN
// SIG // aWNyb3NvZnQgQXp1cmUgQ29kZSBTaWduMIIBIjANBgkq
// SIG // hkiG9w0BAQEFAAOCAQ8AMIIBCgKCAQEArKhH7cINkFWa
// SIG // NPbW4CGpQwfhD2vWIwm5iDQIGjc5Siq9Ay9yIB0MPvck
// SIG // Xnp402u+fVvy8Zb+cPXCyiemnyFG7wYwKgPF4+x2awd4
// SIG // beHkFvcWtTV+Yz5oEKVVT0oWR5NfsUHuqEGDlIVFAYB/
// SIG // 7FIlZQWRiC4emeka+jYoFTl50U2mDQ/CvdCquvAd+dBc
// SIG // hoH0BLXWh00rK3NqRoqQj50vTHl+EB5HCer6+uP7iFKi
// SIG // a3vFw1uDonKVKmcz4x8GJo4y5p7plcr4VAB5FdwTpZrz
// SIG // hFObBzJxcxdIT3qMm07RYM6K1EbUn3AKKTEG2O9etQ06
// SIG // oIKCcGHltvj0NZp37NkEJwIDAQABo4IFijCCBYYwKQYJ
// SIG // KwYBBAGCNxUKBBwwGjAMBgorBgEEAYI3WwEBMAoGCCsG
// SIG // AQUFBwMDMD0GCSsGAQQBgjcVBwQwMC4GJisGAQQBgjcV
// SIG // CIaQ4w2E1bR4hPGLPoWb3RbOnRKBYIPdzWaGlIwyAgFk
// SIG // AgEMMIICdgYIKwYBBQUHAQEEggJoMIICZDBiBggrBgEF
// SIG // BQcwAoZWaHR0cDovL2NybC5taWNyb3NvZnQuY29tL3Br
// SIG // aWluZnJhL0NlcnRzL0JZMlBLSUNTQ0EwMS5BTUUuR0JM
// SIG // X0FNRSUyMENTJTIwQ0ElMjAwMSgyKS5jcnQwUgYIKwYB
// SIG // BQUHMAKGRmh0dHA6Ly9jcmwxLmFtZS5nYmwvYWlhL0JZ
// SIG // MlBLSUNTQ0EwMS5BTUUuR0JMX0FNRSUyMENTJTIwQ0El
// SIG // MjAwMSgyKS5jcnQwUgYIKwYBBQUHMAKGRmh0dHA6Ly9j
// SIG // cmwyLmFtZS5nYmwvYWlhL0JZMlBLSUNTQ0EwMS5BTUUu
// SIG // R0JMX0FNRSUyMENTJTIwQ0ElMjAwMSgyKS5jcnQwUgYI
// SIG // KwYBBQUHMAKGRmh0dHA6Ly9jcmwzLmFtZS5nYmwvYWlh
// SIG // L0JZMlBLSUNTQ0EwMS5BTUUuR0JMX0FNRSUyMENTJTIw
// SIG // Q0ElMjAwMSgyKS5jcnQwUgYIKwYBBQUHMAKGRmh0dHA6
// SIG // Ly9jcmw0LmFtZS5nYmwvYWlhL0JZMlBLSUNTQ0EwMS5B
// SIG // TUUuR0JMX0FNRSUyMENTJTIwQ0ElMjAwMSgyKS5jcnQw
// SIG // ga0GCCsGAQUFBzAChoGgbGRhcDovLy9DTj1BTUUlMjBD
// SIG // UyUyMENBJTIwMDEsQ049QUlBLENOPVB1YmxpYyUyMEtl
// SIG // eSUyMFNlcnZpY2VzLENOPVNlcnZpY2VzLENOPUNvbmZp
// SIG // Z3VyYXRpb24sREM9QU1FLERDPUdCTD9jQUNlcnRpZmlj
// SIG // YXRlP2Jhc2U/b2JqZWN0Q2xhc3M9Y2VydGlmaWNhdGlv
// SIG // bkF1dGhvcml0eTAdBgNVHQ4EFgQUskGhjtP5WCMqHOBI
// SIG // YEqYPR0vFkMwDgYDVR0PAQH/BAQDAgeAMEUGA1UdEQQ+
// SIG // MDykOjA4MR4wHAYDVQQLExVNaWNyb3NvZnQgQ29ycG9y
// SIG // YXRpb24xFjAUBgNVBAUTDTIzNjE2Nys1MDAzNjAwggHm
// SIG // BgNVHR8EggHdMIIB2TCCAdWgggHRoIIBzYY/aHR0cDov
// SIG // L2NybC5taWNyb3NvZnQuY29tL3BraWluZnJhL0NSTC9B
// SIG // TUUlMjBDUyUyMENBJTIwMDEoMikuY3JshjFodHRwOi8v
// SIG // Y3JsMS5hbWUuZ2JsL2NybC9BTUUlMjBDUyUyMENBJTIw
// SIG // MDEoMikuY3JshjFodHRwOi8vY3JsMi5hbWUuZ2JsL2Ny
// SIG // bC9BTUUlMjBDUyUyMENBJTIwMDEoMikuY3JshjFodHRw
// SIG // Oi8vY3JsMy5hbWUuZ2JsL2NybC9BTUUlMjBDUyUyMENB
// SIG // JTIwMDEoMikuY3JshjFodHRwOi8vY3JsNC5hbWUuZ2Js
// SIG // L2NybC9BTUUlMjBDUyUyMENBJTIwMDEoMikuY3JshoG9
// SIG // bGRhcDovLy9DTj1BTUUlMjBDUyUyMENBJTIwMDEoMiks
// SIG // Q049QlkyUEtJQ1NDQTAxLENOPUNEUCxDTj1QdWJsaWMl
// SIG // MjBLZXklMjBTZXJ2aWNlcyxDTj1TZXJ2aWNlcyxDTj1D
// SIG // b25maWd1cmF0aW9uLERDPUFNRSxEQz1HQkw/Y2VydGlm
// SIG // aWNhdGVSZXZvY2F0aW9uTGlzdD9iYXNlP29iamVjdENs
// SIG // YXNzPWNSTERpc3RyaWJ1dGlvblBvaW50MB8GA1UdIwQY
// SIG // MBaAFJZRhOBrb3v+2Aarw/KF5imuavnUMB8GA1UdJQQY
// SIG // MBYGCisGAQQBgjdbAQEGCCsGAQUFBwMDMA0GCSqGSIb3
// SIG // DQEBCwUAA4IBAQDG1533NPfZ4bL0nuae9PWCGH0ZmNci
// SIG // CejMn71r/igTKxx635KmcI38lYY/vhbu++jhMlN3V3Ke
// SIG // AJEmuUdbTxtaXlhhJwWW/3i4GfQGjFIot6N3F9OuXURf
// SIG // 8jc4LypadrWJV1l1bmZ/G75FiqMoEDF7DYjyYJ9BNUU3
// SIG // alOgYyXygBJJjSfJR/8Vgd8hYCExm9DJgXDlSuKZ7ZeD
// SIG // ailP2EGIO5+m0QGI1tyMKdc/YgPrJUw7NI9wmx8ET/J5
// SIG // fxrrh21fdowYoGCYnphYtGhGBvnqDdaHXbVECC3gzbU+
// SIG // nLfeFF30rr/jHxoXWzKfFcYCj5Xnw52bu5mDZB8jF/dH
// SIG // vhlPMIII6DCCBtCgAwIBAgITHwAAAFHqj/accwyoOwAA
// SIG // AAAAUTANBgkqhkiG9w0BAQsFADA8MRMwEQYKCZImiZPy
// SIG // LGQBGRYDR0JMMRMwEQYKCZImiZPyLGQBGRYDQU1FMRAw
// SIG // DgYDVQQDEwdhbWVyb290MB4XDTIxMDUyMTE4NDQxNFoX
// SIG // DTI2MDUyMTE4NTQxNFowQTETMBEGCgmSJomT8ixkARkW
// SIG // A0dCTDETMBEGCgmSJomT8ixkARkWA0FNRTEVMBMGA1UE
// SIG // AxMMQU1FIENTIENBIDAxMIIBIjANBgkqhkiG9w0BAQEF
// SIG // AAOCAQ8AMIIBCgKCAQEAyZpSCX0Bno1W1yqXMhT6BUlJ
// SIG // ZWpa4p3xFeiTHO4vm2Q6C/azR5xwxnyYHrkSGDtS2P9X
// SIG // +KDE64V20mmEQkubxnPNeOVnE2RvdPGxgwlq+BhS3ONd
// SIG // VsQPj79q7XgHM9HhzB9+qk0PC9KN1zm9p/seyiRS6JF1
// SIG // dbOqRf1pUl7FAVxmgiCFgV8hHIb/rDPXig7FDi3S0yEx
// SIG // 2CUDVpIq8jEhG8anUFE1WYxM+ni0S5KHwwKPKV4qyGDo
// SIG // DO+9AmDoma3Chyu5WDlW5cdtqXTWsGPE3umtnX6Amlld
// SIG // UFLms4OVR4guKf+n5LIBCC6bTiocfXPomqYjYTKx7AGM
// SIG // faVLaaXmhQIDAQABo4IE3DCCBNgwEgYJKwYBBAGCNxUB
// SIG // BAUCAwIAAjAjBgkrBgEEAYI3FQIEFgQUEmgkQiFHy9Rr
// SIG // vjHPIKTACyN/P0cwHQYDVR0OBBYEFJZRhOBrb3v+2Aar
// SIG // w/KF5imuavnUMIIBBAYDVR0lBIH8MIH5BgcrBgEFAgMF
// SIG // BggrBgEFBQcDAQYIKwYBBQUHAwIGCisGAQQBgjcUAgEG
// SIG // CSsGAQQBgjcVBgYKKwYBBAGCNwoDDAYJKwYBBAGCNxUG
// SIG // BggrBgEFBQcDCQYIKwYBBQUIAgIGCisGAQQBgjdAAQEG
// SIG // CysGAQQBgjcKAwQBBgorBgEEAYI3CgMEBgkrBgEEAYI3
// SIG // FQUGCisGAQQBgjcUAgIGCisGAQQBgjcUAgMGCCsGAQUF
// SIG // BwMDBgorBgEEAYI3WwEBBgorBgEEAYI3WwIBBgorBgEE
// SIG // AYI3WwMBBgorBgEEAYI3WwUBBgorBgEEAYI3WwQBBgor
// SIG // BgEEAYI3WwQCMBkGCSsGAQQBgjcUAgQMHgoAUwB1AGIA
// SIG // QwBBMAsGA1UdDwQEAwIBhjASBgNVHRMBAf8ECDAGAQH/
// SIG // AgEAMB8GA1UdIwQYMBaAFCleUV5krjS566ycDaeMdQHR
// SIG // CQsoMIIBaAYDVR0fBIIBXzCCAVswggFXoIIBU6CCAU+G
// SIG // MWh0dHA6Ly9jcmwubWljcm9zb2Z0LmNvbS9wa2lpbmZy
// SIG // YS9jcmwvYW1lcm9vdC5jcmyGI2h0dHA6Ly9jcmwyLmFt
// SIG // ZS5nYmwvY3JsL2FtZXJvb3QuY3JshiNodHRwOi8vY3Js
// SIG // My5hbWUuZ2JsL2NybC9hbWVyb290LmNybIYjaHR0cDov
// SIG // L2NybDEuYW1lLmdibC9jcmwvYW1lcm9vdC5jcmyGgaps
// SIG // ZGFwOi8vL0NOPWFtZXJvb3QsQ049QU1FUm9vdCxDTj1D
// SIG // RFAsQ049UHVibGljJTIwS2V5JTIwU2VydmljZXMsQ049
// SIG // U2VydmljZXMsQ049Q29uZmlndXJhdGlvbixEQz1BTUUs
// SIG // REM9R0JMP2NlcnRpZmljYXRlUmV2b2NhdGlvbkxpc3Q/
// SIG // YmFzZT9vYmplY3RDbGFzcz1jUkxEaXN0cmlidXRpb25Q
// SIG // b2ludDCCAasGCCsGAQUFBwEBBIIBnTCCAZkwRwYIKwYB
// SIG // BQUHMAKGO2h0dHA6Ly9jcmwubWljcm9zb2Z0LmNvbS9w
// SIG // a2lpbmZyYS9jZXJ0cy9BTUVSb290X2FtZXJvb3QuY3J0
// SIG // MDcGCCsGAQUFBzAChitodHRwOi8vY3JsMi5hbWUuZ2Js
// SIG // L2FpYS9BTUVSb290X2FtZXJvb3QuY3J0MDcGCCsGAQUF
// SIG // BzAChitodHRwOi8vY3JsMy5hbWUuZ2JsL2FpYS9BTUVS
// SIG // b290X2FtZXJvb3QuY3J0MDcGCCsGAQUFBzAChitodHRw
// SIG // Oi8vY3JsMS5hbWUuZ2JsL2FpYS9BTUVSb290X2FtZXJv
// SIG // b3QuY3J0MIGiBggrBgEFBQcwAoaBlWxkYXA6Ly8vQ049
// SIG // YW1lcm9vdCxDTj1BSUEsQ049UHVibGljJTIwS2V5JTIw
// SIG // U2VydmljZXMsQ049U2VydmljZXMsQ049Q29uZmlndXJh
// SIG // dGlvbixEQz1BTUUsREM9R0JMP2NBQ2VydGlmaWNhdGU/
// SIG // YmFzZT9vYmplY3RDbGFzcz1jZXJ0aWZpY2F0aW9uQXV0
// SIG // aG9yaXR5MA0GCSqGSIb3DQEBCwUAA4ICAQBQECO3Tw/o
// SIG // 317Rrd7yadqcswPx1LvIYymkaTN6KcmuRt6HKa0Xe73U
// SIG // x2/AQ30TfgA9GBJngweRykKBusRzyOU17iIubJvy3gA2
// SIG // 1dwtqtB0DsoEv1U/ptVu2v++doTCJ/i+GbssVXkgaX8H
// SIG // +6EOGEmT4evp4GbwR4HwWlc+Dvf8HH8PdUA2Z04CvcwI
// SIG // fckSipbNm84jxJ8XjmTFTWscldL9edj2NsY6iGnyJFIy
// SIG // ur2PS7VRYyV3p1VAJp91gj1jRQtWEyCB8P5g9nE3z8u0
// SIG // ANaU/hjwEQCrdGyravWgnf2JtG+bT26YAokbc8m+32zU
// SIG // tXRO+NK3tAjhOu2FdsG3qNrF4sc7y37R/C+7Pcb/cFfh
// SIG // ttqsirepZii4xStcjMODYuXzGm3IJs0b0owHG6oKd7ZO
// SIG // GvHpmmh9K8/DLriD/sq8bURD10qi/wuW8zM7IpLg1vcR
// SIG // 9dIK2mc0pj44pc6UX0XbttP/VEJgu3lT2eI9VjWtaKjx
// SIG // 38xE9woSMyekPRtzTwgfuysF9DkJisr+yA4po/FPxpbB
// SIG // w9c/hBf32DH/GFxteS2pmjgKIbMP8sDukmEq3lVvuWNJ
// SIG // sybrZwQvQpvaM49fv+JKpLK5YWYEfwksYRR9wU8Hh/ID
// SIG // 9hRCEkbUoQ2W7mMpsp2Nbp/kcn4ivfolUy3Q9Yf0scsQ
// SIG // 6WTLYpm+AoCUJTGCGWQwghlgAgEBMFgwQTETMBEGCgmS
// SIG // JomT8ixkARkWA0dCTDETMBEGCgmSJomT8ixkARkWA0FN
// SIG // RTEVMBMGA1UEAxMMQU1FIENTIENBIDAxAhM2AAAByGSC
// SIG // ADC0I4J4AAIAAAHIMA0GCWCGSAFlAwQCAQUAoIGuMBkG
// SIG // CSqGSIb3DQEJAzEMBgorBgEEAYI3AgEEMBwGCisGAQQB
// SIG // gjcCAQsxDjAMBgorBgEEAYI3AgEVMC8GCSqGSIb3DQEJ
// SIG // BDEiBCBNajolSktMHMkdKd3NSFEpkNcroJNGX0xERbrf
// SIG // OoCgSzBCBgorBgEEAYI3AgEMMTQwMqAUgBIATQBpAGMA
// SIG // cgBvAHMAbwBmAHShGoAYaHR0cDovL3d3dy5taWNyb3Nv
// SIG // ZnQuY29tMA0GCSqGSIb3DQEBAQUABIIBAHIYVel49Z24
// SIG // xNaO4d6exnjAVx+MEUiZfODJxHt0539+hFvFilH0d/Qt
// SIG // F+xgeUefbJ5R4ywfQKo1WE00CipbP3l3oq3tqjJ3ZHap
// SIG // cGL7JLsps1QaDQQXnkusvU87KelVvDsUeuaWL5RM9ifc
// SIG // aNlIurvkIJ4kxtZYSEixaKHtjgP0DJkhOeOR8JyFhvtQ
// SIG // QTjFdLUKvVBonnqMiLQgbIHEdfUwEzdn72qM/tKwzRQm
// SIG // lje91IXBmvMNxw3tign/w2c7l05El3kpTfMnVHrITH4p
// SIG // ImvBmS0tstz1piIqlZ+7b43AQyf6nCj0Gn7sV40crpl9
// SIG // AIm0soKyOCz+4zKQfo7rKq+hghcsMIIXKAYKKwYBBAGC
// SIG // NwMDATGCFxgwghcUBgkqhkiG9w0BBwKgghcFMIIXAQIB
// SIG // AzEPMA0GCWCGSAFlAwQCAQUAMIIBWQYLKoZIhvcNAQkQ
// SIG // AQSgggFIBIIBRDCCAUACAQEGCisGAQQBhFkKAwEwMTAN
// SIG // BglghkgBZQMEAgEFAAQgqbmKVaYmgfuqGb9/ZQJaDZYj
// SIG // o1BLG7SOLWjQ/q5dgDACBmULB0lmzxgTMjAyMzEwMTcx
// SIG // ODE4NDEuMDQxWjAEgAIB9KCB2KSB1TCB0jELMAkGA1UE
// SIG // BhMCVVMxEzARBgNVBAgTCldhc2hpbmd0b24xEDAOBgNV
// SIG // BAcTB1JlZG1vbmQxHjAcBgNVBAoTFU1pY3Jvc29mdCBD
// SIG // b3Jwb3JhdGlvbjEtMCsGA1UECxMkTWljcm9zb2Z0IEly
// SIG // ZWxhbmQgT3BlcmF0aW9ucyBMaW1pdGVkMSYwJAYDVQQL
// SIG // Ex1UaGFsZXMgVFNTIEVTTjo4RDQxLTRCRjctQjNCNzEl
// SIG // MCMGA1UEAxMcTWljcm9zb2Z0IFRpbWUtU3RhbXAgU2Vy
// SIG // dmljZaCCEXswggcnMIIFD6ADAgECAhMzAAABs/4lzikb
// SIG // G4ocAAEAAAGzMA0GCSqGSIb3DQEBCwUAMHwxCzAJBgNV
// SIG // BAYTAlVTMRMwEQYDVQQIEwpXYXNoaW5ndG9uMRAwDgYD
// SIG // VQQHEwdSZWRtb25kMR4wHAYDVQQKExVNaWNyb3NvZnQg
// SIG // Q29ycG9yYXRpb24xJjAkBgNVBAMTHU1pY3Jvc29mdCBU
// SIG // aW1lLVN0YW1wIFBDQSAyMDEwMB4XDTIyMDkyMDIwMjIw
// SIG // M1oXDTIzMTIxNDIwMjIwM1owgdIxCzAJBgNVBAYTAlVT
// SIG // MRMwEQYDVQQIEwpXYXNoaW5ndG9uMRAwDgYDVQQHEwdS
// SIG // ZWRtb25kMR4wHAYDVQQKExVNaWNyb3NvZnQgQ29ycG9y
// SIG // YXRpb24xLTArBgNVBAsTJE1pY3Jvc29mdCBJcmVsYW5k
// SIG // IE9wZXJhdGlvbnMgTGltaXRlZDEmMCQGA1UECxMdVGhh
// SIG // bGVzIFRTUyBFU046OEQ0MS00QkY3LUIzQjcxJTAjBgNV
// SIG // BAMTHE1pY3Jvc29mdCBUaW1lLVN0YW1wIFNlcnZpY2Uw
// SIG // ggIiMA0GCSqGSIb3DQEBAQUAA4ICDwAwggIKAoICAQC0
// SIG // fA+65hiAriywYIKyvY3t4SUqXPQk8G62v+Cm9nruQ2Ue
// SIG // qAoBbQm4oDLjHGN9UJR6/95LloRydOZ+Prd++zx6J3Qw
// SIG // 28/3VPqvzX10iq9acFNji8pWNLMOd9VWdbFgHcg9hEAh
// SIG // M03Sw+CiWwusJgAqJ4iQQKr4Q8l8SdDbr5ZO+K3VRL64
// SIG // m7A2ccwpVhGuL+thDY/x8oglF9zGRp2PwIQ8ms36XIQ1
// SIG // qD+nCYDQkl5h1fV7CYFyeJfgGAIGqgLzfDfhKTftExKw
// SIG // oBTn8GVdtXIO74HpzlePIJhvxDH9C70QHoq8T1LvozQd
// SIG // yUhW1tVlPGecbCxKDZXt+YnHRE/ht8AzZnEl5UGLOLfe
// SIG // CFkeeNfj7FE5KtJJnT+P9TuBg+eGbCeXlJy2msFzscU9
// SIG // X4G1m/VUYNWeGrKVqbi+YBcB2vFDTEcbCn36K+qq11VU
// SIG // NTnSTktSZXr4aWZbLEglQ6HTHN9CN31ns58urTTqH6X2
// SIG // j67cCdLpF3Cw9ck/vPbuLkAf66lCuiex6ZDbtH0eTOcR
// SIG // rTnIfZ8p3DvWpaK8Q34hHW+s3qrQn3G6OOrvv637LJXB
// SIG // kriRc5cBDZ1Pr0PiSeoyUVKwfpq+dc1lDIlkyw1ZoS3e
// SIG // uv/w2v2AYwNAYtIXGLjv1nLX1pP98fOwC27ahwG5OotX
// SIG // CfGtnKInro/vQQEko7l5AQIDAQABo4IBSTCCAUUwHQYD
// SIG // VR0OBBYEFNAaXcJRZ1IMGIs4SCH/XgXcn8ONMB8GA1Ud
// SIG // IwQYMBaAFJ+nFV0AXmJdg/Tl0mWnG1M1GelyMF8GA1Ud
// SIG // HwRYMFYwVKBSoFCGTmh0dHA6Ly93d3cubWljcm9zb2Z0
// SIG // LmNvbS9wa2lvcHMvY3JsL01pY3Jvc29mdCUyMFRpbWUt
// SIG // U3RhbXAlMjBQQ0ElMjAyMDEwKDEpLmNybDBsBggrBgEF
// SIG // BQcBAQRgMF4wXAYIKwYBBQUHMAKGUGh0dHA6Ly93d3cu
// SIG // bWljcm9zb2Z0LmNvbS9wa2lvcHMvY2VydHMvTWljcm9z
// SIG // b2Z0JTIwVGltZS1TdGFtcCUyMFBDQSUyMDIwMTAoMSku
// SIG // Y3J0MAwGA1UdEwEB/wQCMAAwFgYDVR0lAQH/BAwwCgYI
// SIG // KwYBBQUHAwgwDgYDVR0PAQH/BAQDAgeAMA0GCSqGSIb3
// SIG // DQEBCwUAA4ICAQBahrs3zrAJuMACXxEZiYFltLTSyz5O
// SIG // lWI+d/oQZlCArKhoI/aFzTWrYAqvox7dNxIk81YcbXil
// SIG // ji6EzMd/XAnFCYAzkCB/ho7so2FVXTgmvRcepSOvdPzg
// SIG // WRZc9gw7i6VAbqP/793uCp7ONdpjtwOpg0JJ3cXiUrHQ
// SIG // Um5CqnHAe0wv5rhToc4N/Zn4oxiAnNZGc4iRP+h3Sghf
// SIG // Kffr7NchlEebs5CKPuvKv5+ZDbd94XWkNt+FRIdMD0hP
// SIG // nQoKSkan8YGLAU/+bV2t3vE18iZVaBvY8Fwayp0kG+Pp
// SIG // NfYx1Qd8FVH5Z7gDSUSPWs1sKmBSg22VpH0PLaTaBXyi
// SIG // hUR21qJnKHT9W1Z+5CllAkwPGBtkZUwbb67NwqmN5gA0
// SIG // yVIoOHJDfzBugCK/EPgApigRJuDhaTnGTF9HMWrKKXYM
// SIG // TPWknQbrGiX2dyLZd7wuQt0RPe7lEbFQdqbwvgp4xbbf
// SIG // z5GO9ZfVEx81AjvvjOIUhks5H7vsgYVzBngWai15fXH3
// SIG // 4GD3J0RY0E/exm/24OLLCyBbjSTTQCbm/iL8YaJka7Vr
// SIG // geEjfd+aDH7xuXBHme3smKQWeA25LzeOGbxEdBB0WpC9
// SIG // sW9a67I+3PCPmrhKmM7VKQ57qugcaQSFAJRd1AydEjBu
// SIG // calv/YSzFp2iQryHqxFkxZuuI7YQItAQzMJwsDCCB3Ew
// SIG // ggVZoAMCAQICEzMAAAAVxedrngKbSZkAAAAAABUwDQYJ
// SIG // KoZIhvcNAQELBQAwgYgxCzAJBgNVBAYTAlVTMRMwEQYD
// SIG // VQQIEwpXYXNoaW5ndG9uMRAwDgYDVQQHEwdSZWRtb25k
// SIG // MR4wHAYDVQQKExVNaWNyb3NvZnQgQ29ycG9yYXRpb24x
// SIG // MjAwBgNVBAMTKU1pY3Jvc29mdCBSb290IENlcnRpZmlj
// SIG // YXRlIEF1dGhvcml0eSAyMDEwMB4XDTIxMDkzMDE4MjIy
// SIG // NVoXDTMwMDkzMDE4MzIyNVowfDELMAkGA1UEBhMCVVMx
// SIG // EzARBgNVBAgTCldhc2hpbmd0b24xEDAOBgNVBAcTB1Jl
// SIG // ZG1vbmQxHjAcBgNVBAoTFU1pY3Jvc29mdCBDb3Jwb3Jh
// SIG // dGlvbjEmMCQGA1UEAxMdTWljcm9zb2Z0IFRpbWUtU3Rh
// SIG // bXAgUENBIDIwMTAwggIiMA0GCSqGSIb3DQEBAQUAA4IC
// SIG // DwAwggIKAoICAQDk4aZM57RyIQt5osvXJHm9DtWC0/3u
// SIG // nAcH0qlsTnXIyjVX9gF/bErg4r25PhdgM/9cT8dm95VT
// SIG // cVrifkpa/rg2Z4VGIwy1jRPPdzLAEBjoYH1qUoNEt6aO
// SIG // RmsHFPPFdvWGUNzBRMhxXFExN6AKOG6N7dcP2CZTfDlh
// SIG // AnrEqv1yaa8dq6z2Nr41JmTamDu6GnszrYBbfowQHJ1S
// SIG // /rboYiXcag/PXfT+jlPP1uyFVk3v3byNpOORj7I5LFGc
// SIG // 6XBpDco2LXCOMcg1KL3jtIckw+DJj361VI/c+gVVmG1o
// SIG // O5pGve2krnopN6zL64NF50ZuyjLVwIYwXE8s4mKyzbni
// SIG // jYjklqwBSru+cakXW2dg3viSkR4dPf0gz3N9QZpGdc3E
// SIG // XzTdEonW/aUgfX782Z5F37ZyL9t9X4C626p+Nuw2TPYr
// SIG // bqgSUei/BQOj0XOmTTd0lBw0gg/wEPK3Rxjtp+iZfD9M
// SIG // 269ewvPV2HM9Q07BMzlMjgK8QmguEOqEUUbi0b1qGFph
// SIG // AXPKZ6Je1yh2AuIzGHLXpyDwwvoSCtdjbwzJNmSLW6Cm
// SIG // gyFdXzB0kZSU2LlQ+QuJYfM2BjUYhEfb3BvR/bLUHMVr
// SIG // 9lxSUV0S2yW6r1AFemzFER1y7435UsSFF5PAPBXbGjfH
// SIG // CBUYP3irRbb1Hode2o+eFnJpxq57t7c+auIurQIDAQAB
// SIG // o4IB3TCCAdkwEgYJKwYBBAGCNxUBBAUCAwEAATAjBgkr
// SIG // BgEEAYI3FQIEFgQUKqdS/mTEmr6CkTxGNSnPEP8vBO4w
// SIG // HQYDVR0OBBYEFJ+nFV0AXmJdg/Tl0mWnG1M1GelyMFwG
// SIG // A1UdIARVMFMwUQYMKwYBBAGCN0yDfQEBMEEwPwYIKwYB
// SIG // BQUHAgEWM2h0dHA6Ly93d3cubWljcm9zb2Z0LmNvbS9w
// SIG // a2lvcHMvRG9jcy9SZXBvc2l0b3J5Lmh0bTATBgNVHSUE
// SIG // DDAKBggrBgEFBQcDCDAZBgkrBgEEAYI3FAIEDB4KAFMA
// SIG // dQBiAEMAQTALBgNVHQ8EBAMCAYYwDwYDVR0TAQH/BAUw
// SIG // AwEB/zAfBgNVHSMEGDAWgBTV9lbLj+iiXGJo0T2UkFvX
// SIG // zpoYxDBWBgNVHR8ETzBNMEugSaBHhkVodHRwOi8vY3Js
// SIG // Lm1pY3Jvc29mdC5jb20vcGtpL2NybC9wcm9kdWN0cy9N
// SIG // aWNSb29DZXJBdXRfMjAxMC0wNi0yMy5jcmwwWgYIKwYB
// SIG // BQUHAQEETjBMMEoGCCsGAQUFBzAChj5odHRwOi8vd3d3
// SIG // Lm1pY3Jvc29mdC5jb20vcGtpL2NlcnRzL01pY1Jvb0Nl
// SIG // ckF1dF8yMDEwLTA2LTIzLmNydDANBgkqhkiG9w0BAQsF
// SIG // AAOCAgEAnVV9/Cqt4SwfZwExJFvhnnJL/Klv6lwUtj5O
// SIG // R2R4sQaTlz0xM7U518JxNj/aZGx80HU5bbsPMeTCj/ts
// SIG // 0aGUGCLu6WZnOlNN3Zi6th542DYunKmCVgADsAW+iehp
// SIG // 4LoJ7nvfam++Kctu2D9IdQHZGN5tggz1bSNU5HhTdSRX
// SIG // ud2f8449xvNo32X2pFaq95W2KFUn0CS9QKC/GbYSEhFd
// SIG // PSfgQJY4rPf5KYnDvBewVIVCs/wMnosZiefwC2qBwoEZ
// SIG // QhlSdYo2wh3DYXMuLGt7bj8sCXgU6ZGyqVvfSaN0DLzs
// SIG // kYDSPeZKPmY7T7uG+jIa2Zb0j/aRAfbOxnT99kxybxCr
// SIG // dTDFNLB62FD+CljdQDzHVG2dY3RILLFORy3BFARxv2T5
// SIG // JL5zbcqOCb2zAVdJVGTZc9d/HltEAY5aGZFrDZ+kKNxn
// SIG // GSgkujhLmm77IVRrakURR6nxt67I6IleT53S0Ex2tVdU
// SIG // CbFpAUR+fKFhbHP+CrvsQWY9af3LwUFJfn6Tvsv4O+S3
// SIG // Fb+0zj6lMVGEvL8CwYKiexcdFYmNcP7ntdAoGokLjzba
// SIG // ukz5m/8K6TT4JDVnK+ANuOaMmdbhIurwJ0I9JZTmdHRb
// SIG // atGePu1+oDEzfbzL6Xu/OHBE0ZDxyKs6ijoIYn/ZcGNT
// SIG // TY3ugm2lBRDBcQZqELQdVTNYs6FwZvKhggLXMIICQAIB
// SIG // ATCCAQChgdikgdUwgdIxCzAJBgNVBAYTAlVTMRMwEQYD
// SIG // VQQIEwpXYXNoaW5ndG9uMRAwDgYDVQQHEwdSZWRtb25k
// SIG // MR4wHAYDVQQKExVNaWNyb3NvZnQgQ29ycG9yYXRpb24x
// SIG // LTArBgNVBAsTJE1pY3Jvc29mdCBJcmVsYW5kIE9wZXJh
// SIG // dGlvbnMgTGltaXRlZDEmMCQGA1UECxMdVGhhbGVzIFRT
// SIG // UyBFU046OEQ0MS00QkY3LUIzQjcxJTAjBgNVBAMTHE1p
// SIG // Y3Jvc29mdCBUaW1lLVN0YW1wIFNlcnZpY2WiIwoBATAH
// SIG // BgUrDgMCGgMVAHGLROiW3R4SpcJCXiqAldSSJA5hoIGD
// SIG // MIGApH4wfDELMAkGA1UEBhMCVVMxEzARBgNVBAgTCldh
// SIG // c2hpbmd0b24xEDAOBgNVBAcTB1JlZG1vbmQxHjAcBgNV
// SIG // BAoTFU1pY3Jvc29mdCBDb3Jwb3JhdGlvbjEmMCQGA1UE
// SIG // AxMdTWljcm9zb2Z0IFRpbWUtU3RhbXAgUENBIDIwMTAw
// SIG // DQYJKoZIhvcNAQEFBQACBQDo2RwSMCIYDzIwMjMxMDE3
// SIG // MjI0MzMwWhgPMjAyMzEwMTgyMjQzMzBaMHcwPQYKKwYB
// SIG // BAGEWQoEATEvMC0wCgIFAOjZHBICAQAwCgIBAAICBSkC
// SIG // Af8wBwIBAAICEUIwCgIFAOjabZICAQAwNgYKKwYBBAGE
// SIG // WQoEAjEoMCYwDAYKKwYBBAGEWQoDAqAKMAgCAQACAweh
// SIG // IKEKMAgCAQACAwGGoDANBgkqhkiG9w0BAQUFAAOBgQCO
// SIG // K0ydifiGxSbpvmxsHuuWdkomT2c3RPzHjl0ih8Vp6wi0
// SIG // pVIxv4WiEycb62ESvTPMnbBp9KmPC0pQBchQVPwMC8A1
// SIG // ondqupGi+xf1FK40M6EXUlYUGSHs6l8z2mN+54jMaCqP
// SIG // CI9Dz8MtCA16xE9vkeJyfE8tOcUNLGqYg1C8rTGCBA0w
// SIG // ggQJAgEBMIGTMHwxCzAJBgNVBAYTAlVTMRMwEQYDVQQI
// SIG // EwpXYXNoaW5ndG9uMRAwDgYDVQQHEwdSZWRtb25kMR4w
// SIG // HAYDVQQKExVNaWNyb3NvZnQgQ29ycG9yYXRpb24xJjAk
// SIG // BgNVBAMTHU1pY3Jvc29mdCBUaW1lLVN0YW1wIFBDQSAy
// SIG // MDEwAhMzAAABs/4lzikbG4ocAAEAAAGzMA0GCWCGSAFl
// SIG // AwQCAQUAoIIBSjAaBgkqhkiG9w0BCQMxDQYLKoZIhvcN
// SIG // AQkQAQQwLwYJKoZIhvcNAQkEMSIEIAbrV5vNZAn599ba
// SIG // CqWdvTVZNn/XndiNuotB5d3v/6A7MIH6BgsqhkiG9w0B
// SIG // CRACLzGB6jCB5zCB5DCBvQQghqEz1SoQ0ge2RtMyUGVD
// SIG // No5P5ZdcyRoeijoZ++pPv0IwgZgwgYCkfjB8MQswCQYD
// SIG // VQQGEwJVUzETMBEGA1UECBMKV2FzaGluZ3RvbjEQMA4G
// SIG // A1UEBxMHUmVkbW9uZDEeMBwGA1UEChMVTWljcm9zb2Z0
// SIG // IENvcnBvcmF0aW9uMSYwJAYDVQQDEx1NaWNyb3NvZnQg
// SIG // VGltZS1TdGFtcCBQQ0EgMjAxMAITMwAAAbP+Jc4pGxuK
// SIG // HAABAAABszAiBCBLA2DriwfwHmITy//hapoUzcrhfxtf
// SIG // RZASe6jgrP5TAzANBgkqhkiG9w0BAQsFAASCAgAgyhp7
// SIG // O6DHKODxcX9IB55jQQ2RWVWNU0FVJvPlQJLJN67HGL61
// SIG // SbcK0wyHSDxVKqRguDnQq69G6TiX/Wp3vl0/w3TgZtRp
// SIG // sx99e0KHbKfupbeN1r56uClh/mwSzDmZQUsEAriq4hw3
// SIG // AxNSKLb3Ko/pzbNZX4N4fe1TRn4FjUzXPczUIyEbYfM2
// SIG // 5sByNpcxTob4IsAyQDiCZwCVfwuwYCU5kPBkajr4+rs+
// SIG // GxulVI/G3X+x8tp73r3E14JFxInz8F2k/WAxRdzyXL+n
// SIG // 3nXT6EkMZOQd23Dxg5E4Hv6VK83+U3Rz70Jfsw6jLu9C
// SIG // jWhHuPZmTbRseBtfJcroFCQMRFQ5ptvqwpf3h746u7kL
// SIG // IN6Q7/7lNukj5vL+C26nf5pZjvH5nJSPwPXU8ng9LVm6
// SIG // +YUHRdcQl5SvHA7hSLTFoG+0driBXUq0KRqbpAnPBxbh
// SIG // QWnY2w1NlpPGds9ELRdpIjAzQVJoa5FSYzV70PCqpCPi
// SIG // tt0qAB/4+jmLwwiygMspAYBHpZYi3tHUVeb0aFh06Csg
// SIG // pcXGKK5StujZBcsfBOnb3KzJ2xS1waVssaXIRhEFigLo
// SIG // JV9h/t/dv8Iqhcbs5oaAMPOYxxJGkEuBr/Z3lkD7Qbs4
// SIG // r80YKYQGeTepHhL7SnU36B+FZjGaDiOCmxiZkAa0Yuex
// SIG // L7Usa0KCpuIaB7ElpA==
// SIG // End signature block
