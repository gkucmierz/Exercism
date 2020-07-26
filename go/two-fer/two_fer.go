// Package twofer produces string using name
package twofer

import "fmt"

// ShareWith produces sharing string using provided name
func ShareWith(name string) string {
	if name == "" {
		name = "you"
	}
	return fmt.Sprintf("One for %s, one for me.", name)
}
