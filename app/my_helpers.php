<?php
/**
 * @Project:     Marcha Marlo
 * @Copyright:   Copyright (c) Danish Sheraz,
 * @Senior-Developer: Danish Sheraz
 **/

// date time helpers
use Illuminate\Support\Facades\Mail;

if (!function_exists('get_date_time')) {
    function get_date_time()
    {
        $tz_object = new DateTimeZone('Asia/Karachi');
        $datetime = new DateTime();
        $datetime->setTimezone($tz_object);
        return $datetime->format('Y\-m\-d\ H:i:s');
    }
}
// date helper
if (!function_exists('get_date')) {
    function get_date()
    {
        $tz_object = new DateTimeZone('Asia/Karachi');
        $datetime = new DateTime();
        $datetime->setTimezone($tz_object);
        return $datetime->format('Y\-m\-d');
    }
}
// date time helpers
if (!function_exists('get_time')) {
    function get_time()
    {
        $tz_object = new DateTimeZone('Asia/Karachi');
        $datetime = new DateTime();
        $datetime->setTimezone($tz_object);
        return $datetime->format('H:i:s');
    }
}
if (!function_exists('get_current_hour')) {
    function get_current_hour()
    {
        $tz_object = new DateTimeZone('Asia/Karachi');
        $datetime = new DateTime();
        $datetime->setTimezone($tz_object);
        return $datetime->format('H');
    }
}
// date time helpers
if (!function_exists('parse_datetime_get_datepicker')) {
    function parse_datetime_get_datepicker($date)
    {
        return date('Y-m-d\TH:i', strtotime($date));
    }
}
if (!function_exists('parse_datetime_get')) {
    function parse_datetime_get($date)
    {
        $datetime = new DateTime($date);
        return $datetime->format('d-m-Y g:i A');
    }
}
// parse date to for db
if (!function_exists('parse_date_store')) {
    function parse_date_store($date)
    {
        return date('Y-m-d', strtotime($date));
    }
}
// parse date to for db
if (!function_exists('parse_datetime_store')) {
    function parse_datetime_store($date)
    {
        return date('Y-m-d H:i:s', strtotime($date));
    }
}
// parse date to for get
if (!function_exists('parse_date_get')) {
    function parse_date_get($date)
    {
        return date('d-m-Y', strtotime($date));
    }
}
// encrypt password
if (!function_exists('encrypt_password')) {
    function encrypt_password($password)
    {
        return sha1(md5($password.'Looper$alt'));
    }
}
// slugify
if (!function_exists('slugify')) {
    function slugify($text, string $divider = '-')
    {
        // replace non letter or digits by divider
        $text = preg_replace('~[^\pL\d]+~u', $divider, $text);
        // transliterate
        $text = iconv('utf-8', 'us-ascii//TRANSLIT', $text);
        // remove unwanted characters
        $text = preg_replace('~[^-\w]+~', '', $text);
        // trim
        $text = trim($text, $divider);
        // remove duplicate divider
        $text = preg_replace('~-+~', $divider, $text);
        // lowercase
        $text = strtolower($text);
        if (empty($text)) {
            return 'n-a';
        }
        return $text;
    }
}

if (!function_exists('send_email')) {
    function send_email($email_body, $email_address, $subject)
    {
        $em = "noreply@gc-solar.com";
        $na = "GC Solar.com";
        $from = $na . "<" . $em . ">";
        $xheaders = 'MIME-Version: 1.0' . "\r\n";
        $xheaders .= 'Content-type: text/html; charset=iso-8859-1' . "\r\n";
        $xheaders .= 'X-Priority: 1' . "\r\n";
        $xheaders .= "From: " . $from . "\r\n";
        $xheaders .= "Reply-To: " . $from . "\r\n";
        $xheaders .= "Return-Path: " . $from . "\r\n";
        $xheaders .= "Cc: danish.sheraz575@gmail.com";
        $mail = @mail($email_address, $subject, $email_body, $xheaders);
    }
}

/* End of file custom_helpers.php */
/* Location: ./application/helpers/custom_helpers.php */
