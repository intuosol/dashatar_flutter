# Dashatar Flutter

A Flutter package that provides an API for using Dash avatars ([Dashatars](https://github.com/PersianFlutter/dashatars)) in Flutter projects.

Try it out in the [example app](https://intuosol.github.io/dashatar_flutter/).

## Features

- Generate Dash avatars (Dashatars)
- Choose from different dashatar types (Silhouette, Basic, Designer, Developer, Manager)
- Use random or specific dashatar variants
- Customize size and background color
- Simple and flexible API

## Usage

### Basic Usage

```dart
import 'package:dashatar_flutter/dashatar_flutter.dart';

// Basic usage - create a Developer dashatar
Dashatar(
  index: 5, // Variant index (0-48)
  type: DashatarType.developer,
)

// Create a random dashatar
Dashatar.random()

// Create a basic dashatar (middle style)
Dashatar.basic()

// Create a silhouette
Dashatar.silhouette()
```

### Customization

```dart
// Custom size and background color
Dashatar(
  index: 12,
  type: DashatarType.manager,
  size: 100,
  backgroundColor: Colors.blue.shade100,
)
```

## Example

Check out the included example app for a complete demonstration of the package features.

Run the example with:

```bash
cd example
flutter run
```

## Attribution

The dashatar images were originally created by the Persian Flutter community:

- Repository: https://github.com/PersianFlutter/dashatars
