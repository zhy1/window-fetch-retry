
accept pull request.

define
```javascript
fetch(url, config)


```

extend config API
```javascript
config  = {
    debug: debug,                                       // open debug and record
    retry: 3,                                           //  retry times, when resendInterval trgger retry,ever retry, retry --,resend ++
    resend:1,                                            // has been resend times ,ever retry, retry --,resend ++  
    timeout:2000,                                       //  timeout ms 
    debugUrl:'http://company-debugger-url/',            //  debugger  url
    recordUrl:'http://company-record-url'               //  record
    resendInterval: 2000,                               //  retry when timeout
    queryString:{},                                      //  parse query object to string,
    method: 'POST',
    body:{},
    headers:{},
    cookie:{},
}


```

## licence 
MIT



## thx for 

  [thx base from]: "github/fetch"
  [thx]: https://fetch.spec.whatwg.org
  [thx]: http://todogroup.org/opencodeofconduct/#fetch/opensource@github.com
  [thx]: https://developer.mozilla.org/en-US/docs/Web/HTTP/Access_control_CORS
  [thx]: https://www.owasp.org/index.php/Cross-Site_Request_Forgery_(CSRF)_Prevention_Cheat_Sheet
  [thx]: https://developer.mozilla.org/en-US/docs/Glossary/Forbidden_header_name
