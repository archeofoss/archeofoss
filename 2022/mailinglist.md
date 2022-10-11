---
title: "List of authors"
layout: article-slim
---
{% assign list = "" | split: "," %}

{% for art in site.pages %}
  {% if art.auths and art.path contains "2022" %}
    {% for auth in art.auths %}
      {% if auth.email %}
        {% capture item %}{{auth.name}} <{{ auth.email }}>{% endcapture %}
        {% unless list contains item %}
          {% assign list = list | push: item %}
        {% endunless %}
      {% endif %}
    {% endfor %}
  {% endif %}
{% endfor %}

<ol>
  <li>{{ list | sort | join: "</lI><li>" }}</li>
</ol>
