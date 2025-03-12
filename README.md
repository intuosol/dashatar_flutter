# Dashatar Flutter

A Flutter package that provides an API for using [Dashatars](https://github.com/PersianFlutter/dashatars) in Flutter projects.

## Features

- Generate Persian/Iranian-themed avatars
- Choose from different dashatar types (Designer, Developer, Manager)
- Use random or specific dashatar variants
- Customize size and background color
- Simple and flexible API

## Getting Started

Add the package to your pubspec.yaml:

```yaml
dependencies:
  dashatar_flutter: ^0.1.0
```

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
Dashatar.basic(type: DashatarType.designer)

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

The dashatar images were originally created by the Persian Flutter community and are used with permission:
- Website: https://dashatar-dev.web.app/
- Repository: https://github.com/PersianFlutter/dashatars

## License

This package is licensed under the MIT License - see the LICENSE file for details.
