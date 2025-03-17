import 'package:dashatar_flutter/dashatar_flutter.dart';

/// Returns the source code for the different Dashatar variants
class DashatarSourceCode {
  DashatarSourceCode._();

  /// Returns the source code for the silhouette variant
  static String get silhouette {
    return '''Dashatar.silhouette();''';
  }

  /// Returns the source code for the basic variant
  static String get basic {
    return '''Dashatar.basic();''';
  }

  /// Returns the source code for the random variant with a random background
  static String get randomWithBackground {
    return '''
Dashatar.random(
  backgroundColor: 
    Colors.primaries[
      Random().nextInt(Colors.primaries.length)
    ],
  allowBasic: true,
);''';
  }

  /// Returns the source code for the variant at a specific index
  /// and type
  static String atIndexOfType({
    required int index,
    required DashatarType type,
  }) {
    return '''
Dashatar(
  index: $index, 
  type: $type
);''';
  }

  /// Returns the source code for a custom variant with a specific index,
  /// type, and background color
  static String custom({
    required int index,
    required DashatarType type,
    required String colorName,
  }) {
    return '''
Dashatar(
  index: $index, 
  type: $type,
  backgroundColor: Colors.$colorName,
);''';
  }
}
