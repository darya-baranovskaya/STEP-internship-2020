package com.google.sps.servlets;

import java.io.IOException;
import java.util.Arrays;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import com.google.gson.Gson;
import java.io.IOException;
import java.util.Date;

import java.util.ArrayList;

/** Servlet that processes text. */
@WebServlet("/form")
public final class FormServlet extends HttpServlet {
    String textForm;
    String rateValueForm;

  @Override
  public void doPost(HttpServletRequest request, HttpServletResponse response) throws IOException {
    // Get the input from the form.
    String text = getParameter(request, "text-input", "");
    String rates = request.getParameter("color-choise");
    String rate_value = request.getParameter("color");
    if ("red".equals(rate_value)) {
        rate_value = "red";
    } else if ("green".equals(rate_value)) {
        rate_value = "green";
    } else if ("blue".equals(rate_value)) {
        rate_value = "blue";
    }
    text = "<h3 >" + text + " I like " + rate_value+ " color.</h3>" ;
    textForm = text;
    rateValueForm = rate_value;
    response.setContentType("text/html;");
    response.getWriter().println(text);
    response.getWriter().println(rate_value);
  }

  private String getParameter(HttpServletRequest request, String name, String defaultValue) {
    String value = request.getParameter(name);
    if (value == null) {
      return defaultValue;
    }
    return value;
  }


  public void doGet(HttpServletRequest request, HttpServletResponse response) throws IOException {

    Gson gson = new Gson();
    String message = request.getParameter("text");
    String jsonStr = gson.toJson(message);
    // Send the JSON as the response
    response.setContentType("application/json;");
    response.getWriter().println(jsonStr);
    response.getWriter().println(rateValueForm);
  }
}