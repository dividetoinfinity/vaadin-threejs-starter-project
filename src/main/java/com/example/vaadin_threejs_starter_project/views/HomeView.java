package com.example.vaadin_threejs_starter_project.views;

import com.example.vaadin_threejs_starter_project.component.three.ThreeComponent;
import com.vaadin.flow.component.Tag;
import com.vaadin.flow.component.dependency.JsModule;
import com.vaadin.flow.component.html.H1;
import com.vaadin.flow.component.html.Paragraph;
import com.vaadin.flow.component.orderedlayout.VerticalLayout;
import com.vaadin.flow.router.Route;

@Tag("my-three-element")
@JsModule("./vaadin-threejs-starter-project/my-three-element.js")
@Route("")
public class HomeView extends VerticalLayout {

    public HomeView() {

        // add(new H1("Welcome to your new application"));
        // add(new Paragraph("This is the home view"));

        // add(new Paragraph("You can edit this view in src\\main\\java\\com\\example\\vaadin_threejs_starter_project\\views\\HomeView.java"));

        new ThreeComponent();
        // setSizeFull();
    }
}
