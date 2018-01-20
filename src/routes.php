<?php

use Slim\Http\Request;
use Slim\Http\Response;

// Routes

$app->get('/', function ($request, $response, $args) {
    return $this->view->render($response, 'index.twig', [
        'title' => 'Bootstrap 4'
    ]);
});