 <?php
$curl='https://maps.googleapis.com/maps/api/place/photo?maxwidth=400&photoreference=CmRdAAAAJsUEcq-6nn3uskXuH7pMthqkuSysD1wfG07P60TJu2j_d2nPEsSG0VJuDzPdKF-60JAzPfaLeak1Uy_0nIPfW-0TsMnLZRhksBAAnorMmvADBdy3ezpBd2cEebL6DRrdEhBY_P3XS7UWzFML_AnqC7WfGhSS7eyOHV6MxMLvHzL5yAnrRG8-fw&key=AIzaSyAdDocD5G6lwtZQR7UhKQaS2OQmq0mi0rw&sensor=true';
function get_furl($url)
    {
    $furl = false;
    // First check response headers
    $headers = get_headers($url);
    // Test for 301 or 302
    if(preg_match('/^HTTP\/\d\.\d\s+(301|302)/',$headers[0]))
        {
        foreach($headers as $value)
            {
            if(substr(strtolower($value), 0, 9) == "location:")
                {
                $furl = trim(substr($value, 9, strlen($value)));
                }
            }
        }
    // Set final URL
    $furl = ($furl) ? $furl : $url;
    echo $furl;
    return $furl;
    }

get_furl($curl);
