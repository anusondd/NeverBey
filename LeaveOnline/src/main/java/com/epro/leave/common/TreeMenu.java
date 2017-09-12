package com.epro.leave.common;

import java.util.ArrayList;

import com.epro.infrastructure.security.entity.Menu;

public class TreeMenu {
	
	public    String label;
	public    Menu data;
	public    String expandedIcon="fa-folder-open";
	public    String collapsedIcon="fa-folder";
	public	  Boolean selectable;
	public  ArrayList<TreeMenu> children =new ArrayList<TreeMenu>();
	
	
	
	
	
	
	public Boolean getSelectable() {
		return selectable;
	}
	public void setSelectable(Boolean selectable) {
		this.selectable = selectable;
	}
	public ArrayList<TreeMenu> getChildren() {
		return children;
	}
	public void setChildren(ArrayList<TreeMenu> children) {
		this.children = children;
	}
	
	public String getLabel() {
		return label;
	}
	public void setLabel(String label) {
		this.label = label;
	}
	
	public Menu getData() {
		return data;
	}
	public void setData(Menu data) {
		this.data = data;
	}
	public String getExpandedIcon() {
		return expandedIcon;
	}
	public void setExpandedIcon(String expandedIcon) {
		this.expandedIcon = expandedIcon;
	}
	public String getCollapsedIcon() {
		return collapsedIcon;
	}
	public void setCollapsedIcon(String collapsedIcon) {
		this.collapsedIcon = collapsedIcon;
	}

}
