
// Package that can produce sentence
package twofer

import "fmt"

// Produce share sentence
func ShareWith(name string) string {
	if name == "" {
		name = "you"
	}
	return fmt.Sprintf("One for %s, one for me.", name)
}
