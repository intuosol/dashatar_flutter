import 'dart:math';
import 'package:flutter/material.dart';
import 'models/dashatar_type.dart';

/// A widget that displays a Dashatar avatar
class Dashatar extends StatelessWidget {
  /// Creates a dashatar from a specific index/variant
  ///
  /// Each dashatar type has 49 different variants (0-48)
  const Dashatar({
    super.key,
    required int index,
    this.type = DashatarType.developer,
    this.size,
    this.backgroundColor = Colors.transparent,
  }) : _variant = index % 49,
       _isBasic = false,
       avoidRepeatedImages = false,
       _isSilhouette = false;

  /// Creates a random dashatar
  ///
  /// If [allowBasic] is true, the basic variant might be chosen.
  /// If [avoidRepeatedImages] is true, variants that are the same across
  /// different types will be avoided
  factory Dashatar.random({
    Key? key,
    double? size,
    Color backgroundColor = Colors.transparent,
    bool allowBasic = false,
    bool avoidRepeatedImages = false,
  }) {
    // There are 49 valid combinations
    final int count = allowBasic ? 49 : 48;
    final int index = Random().nextInt(count);

    // If not allowing basic which is at index 24, adjust the index
    final int variant = !allowBasic && index >= 24 ? index + 1 : index;

    return Dashatar._internal(
      key: key,
      type: DashatarType.values[Random().nextInt(3)],
      size: size,
      backgroundColor: backgroundColor,
      variant: variant,
      isBasic: false,
      isSilhouette: false,
      avoidRepeatedImages: avoidRepeatedImages,
    );
  }

  /// Creates a basic dashatar without any customization
  factory Dashatar.basic({
    Key? key,
    double? size,
    Color backgroundColor = Colors.transparent,
  }) {
    return Dashatar._internal(
      key: key,
      type: DashatarType.developer, // Type doesn't matter for basic
      size: size,
      backgroundColor: backgroundColor,
      variant: 24, // The variant for the basic combination
      isBasic: true,
      isSilhouette: false,
      avoidRepeatedImages: false,
    );
  }

  /// Creates a silhouette dashatar
  factory Dashatar.silhouette({
    Key? key,
    double? size,
    Color backgroundColor = Colors.transparent,
  }) {
    return Dashatar._internal(
      key: key,
      type: DashatarType.developer, // Type doesn't matter for silhouette
      size: size,
      backgroundColor: backgroundColor,
      variant: null,
      isBasic: false,
      isSilhouette: true,
    );
  }

  /// Internal constructor for creating specific dashatar variants
  const Dashatar._internal({
    super.key,
    required this.type,
    required this.size,
    required this.backgroundColor,
    required int? variant,
    required bool isBasic,
    required bool isSilhouette,
    this.avoidRepeatedImages = true,
  }) : _variant = variant,
       _isBasic = isBasic,
       _isSilhouette = isSilhouette;

  /// The type of dashatar (Designer, Developer, Manager)
  final DashatarType type;

  /// The size of the dashatar image
  final double? size;

  /// The background color behind the dashatar
  final Color backgroundColor;

  /// Whether to avoid repeated images between types (first, middle, last variants)
  final bool avoidRepeatedImages;

  /// The specific variant index (null means random)
  final int? _variant;

  /// Whether this is the basic dashatar
  final bool _isBasic;

  /// Whether this is the silhouette dashatar
  final bool _isSilhouette;

  /// Valid dashatar combinations that sum to 12
  static const List<List<int>> _validCombinations = <List<int>>[
    <int>[1, 1, 5, 5],
    <int>[1, 2, 4, 5],
    <int>[1, 3, 3, 5],
    <int>[1, 3, 4, 4],
    <int>[1, 4, 2, 5],
    <int>[1, 4, 3, 4],
    <int>[1, 5, 1, 5],
    <int>[1, 5, 2, 4],
    <int>[1, 5, 3, 3],
    <int>[2, 1, 4, 5],
    <int>[2, 2, 3, 5],
    <int>[2, 2, 4, 4],
    <int>[2, 3, 2, 5],
    <int>[2, 3, 3, 4],
    <int>[2, 4, 1, 5],
    <int>[2, 4, 2, 4],
    <int>[2, 4, 3, 3],
    <int>[2, 5, 1, 4],
    <int>[2, 5, 2, 3],
    <int>[3, 1, 3, 5],
    <int>[3, 1, 4, 4],
    <int>[3, 2, 2, 5],
    <int>[3, 2, 3, 4],
    <int>[3, 3, 1, 5],
    <int>[3, 3, 2, 4],
    <int>[3, 3, 3, 3],
    <int>[3, 4, 1, 4],
    <int>[3, 4, 2, 3],
    <int>[3, 5, 1, 3],
    <int>[3, 5, 2, 2],
    <int>[4, 1, 2, 5],
    <int>[4, 1, 3, 4],
    <int>[4, 2, 1, 5],
    <int>[4, 2, 2, 4],
    <int>[4, 2, 3, 3],
    <int>[4, 3, 1, 4],
    <int>[4, 3, 2, 3],
    <int>[4, 4, 1, 3],
    <int>[4, 4, 2, 2],
    <int>[4, 5, 1, 2],
    <int>[5, 1, 1, 5],
    <int>[5, 1, 2, 4],
    <int>[5, 1, 3, 3],
    <int>[5, 2, 1, 4],
    <int>[5, 2, 2, 3],
    <int>[5, 3, 1, 3],
    <int>[5, 3, 2, 2],
    <int>[5, 4, 1, 2],
    <int>[5, 5, 1, 1],
  ];

  /// Gets the filename for a dashatar based on its parameters
  String _getFilename() {
    if (_isSilhouette) {
      return 'assets/dashatars/silhouette.png';
    }

    List<int> combination;

    if (_isBasic) {
      combination = <int>[3, 3, 3, 3]; // Basic version
    } else if (_variant != null) {
      // Get the specific variant
      combination = _validCombinations[_variant % _validCombinations.length];

      // Check if this is a first/middle/final image combination
      final bool isFirstImage = _variant == 0; // [1, 1, 5, 5]
      final bool isMiddleImage = _variant == 24; // [3, 3, 3, 3]
      final bool isFinalImage = _variant == 48; // [5, 5, 1, 1]

      // If first, middle, or final image and not specifically requested as basic,
      // and we want to avoid repeated images, shift to a neighboring variant instead
      if ((isFirstImage || isMiddleImage || isFinalImage) &&
          !_isBasic &&
          avoidRepeatedImages) {
        // Get a neighboring variant (randomly go up or down by 1)
        final int adjustment = Random().nextBool() ? 1 : -1;
        // Handle wrapping around the ends
        final int adjustedIndex =
            (_variant + adjustment) % _validCombinations.length;
        combination = _validCombinations[adjustedIndex];
      }
    } else {
      // Random selection (avoiding first, middle, and last if requested)
      final Random random = Random();
      int randomIndex;

      if (avoidRepeatedImages) {
        do {
          randomIndex = random.nextInt(_validCombinations.length);
        } while (randomIndex == 0 || randomIndex == 24 || randomIndex == 48);
      } else {
        randomIndex = random.nextInt(_validCombinations.length);
      }

      combination = _validCombinations[randomIndex];
    }

    final String s = combination[0].toString();
    final String a = combination[1].toString();
    final String w = combination[2].toString();
    final String c = combination[3].toString();

    return 'assets/dashatars/${type.value}/s-${s}_a-${a}_w-${w}_c-$c.png';
  }

  @override
  Widget build(BuildContext context) {
    Image image;

    if (_isSilhouette) {
      image = Image.asset(
        'assets/dashatars/silhouette.png',
        package: 'dashatar_flutter',
        fit: BoxFit.cover,
      );
    } else {
      image = Image.asset(
        _getFilename(),
        package: 'dashatar_flutter',
        fit: BoxFit.fitWidth,
      );
    }

    return Container(
      width: size,
      height: size,
      clipBehavior:
          backgroundColor == Colors.transparent ? Clip.none : Clip.antiAlias,
      decoration: BoxDecoration(color: backgroundColor, shape: BoxShape.circle),
      child: Padding(
        padding: const EdgeInsets.all(4.0),
        child: FittedBox(fit: BoxFit.scaleDown, child: image),
      ),
    );
  }
}
