import 'dart:math';

import 'package:dashatar_flutter/dashatar_flutter.dart';
import 'package:dashatar_flutter_example/dashatar_source_code.dart';
import 'package:flutter/material.dart';
import 'package:widget_snippet/widget_snippet.dart';

/// Display a grid of all the possible Dashatar widgets
class GalleryTab extends StatelessWidget {
  const GalleryTab({super.key});

  /// Returns a list of all the possible Dashatar widgets
  List<Widget> _allDashatars(BuildContext context) {
    List<Widget> cards = [];
    // Iterate over all indices
    for (var i = 0; i < 49; i++) {
      cards.addAll(
        // Iterate over all types
        DashatarType.values.map(
          (type) => _buildAvatarCard(
            context: context,
            title: '${type.name} $i'.toSentenceCase(),
            dashatar: Dashatar(index: i, type: type),
            sourceCode: DashatarSourceCode.atIndexOfType(index: i, type: type),
          ),
        ),
      );
    }
    return cards;
  }

  @override
  Widget build(BuildContext context) {
    return Column(
      children: [
        Expanded(
          child: GridView.count(
            crossAxisCount: 3,
            crossAxisSpacing: 4,
            mainAxisSpacing: 4,
            padding: EdgeInsets.all(16),
            children: [
              // Silhouette variant
              _buildAvatarCard(
                context: context,
                title: 'Silhouette',
                dashatar: Dashatar.silhouette(),
                sourceCode: DashatarSourceCode.silhouette,
              ),
              // Basic variant
              _buildAvatarCard(
                context: context,
                title: 'Basic',
                dashatar: Dashatar.basic(),
                sourceCode: DashatarSourceCode.basic,
              ),
              // Generate a random variant with a random background
              _buildAvatarCard(
                context: context,
                title: 'Randomized',
                dashatar: Dashatar.random(
                  backgroundColor:
                      Colors.primaries[Random().nextInt(
                        Colors.primaries.length,
                      )],
                  allowBasic: true,
                ),
                sourceCode: DashatarSourceCode.randomWithBackground,
              ),
              // Display all variants
              ..._allDashatars(context),
              const SizedBox(height: 16),
            ],
          ),
        ),
      ],
    );
  }

  // A card displaying a dashatar and its title, can be tapped
  // to show the source code of the widget.
  Widget _buildAvatarCard({
    required BuildContext context,
    required String title,
    required Dashatar dashatar,
    required String sourceCode,
  }) {
    return GestureDetector(
      onTap: () {
        WidgetSnippet.showModal(
          context: context,
          widget: dashatar,
          sourceCode: sourceCode,
          config: WidgetSnippetConfig(title: 'Dashatar Code Snippet'),
        );
      },
      child: Card(
        child: Padding(
          padding: const EdgeInsets.all(8.0),
          child: Column(
            mainAxisAlignment: MainAxisAlignment.center,
            children: [
              Expanded(child: Center(child: dashatar)),
              const SizedBox(height: 8),
              Text(
                title,
                style: const TextStyle(fontWeight: FontWeight.bold),
                textAlign: TextAlign.center,
              ),
            ],
          ),
        ),
      ),
    );
  }
}

// Extension to capitalize the first letter of a string
extension on String {
  String toSentenceCase() {
    return '${this[0].toUpperCase()}${substring(1)}';
  }
}
